import {Injectable} from '@angular/core';
import {switchMap, tap} from 'rxjs/operators';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import {AuthService, TokenService, User} from '@core/authentication';
import {Menu, MenuService} from './menu.service';
import {ROLE} from "../../models/gestion-utilisateurs/role";

@Injectable({
    providedIn: 'root',
})
export class StartupService {
    constructor(
        private authService: AuthService,
        private menuService: MenuService,
        private tokenService: TokenService,
        private permissonsService: NgxPermissionsService,
        private rolesService: NgxRolesService
    ) {
    }

    /**
     * Load the application only after get the menu or other essential informations
     * such as permissions and roles.
     */
    load() {
        return new Promise<void>((resolve, reject) => {
            this.authService
                .change()
                .pipe(
                    tap(user => this.setPermissions(user)),
                    switchMap(() => this.authService.menu()),
                    tap(menu => this.setMenu(menu))
                )
                .subscribe(
                    () => resolve(),
                    () => resolve()
                );
        });
    }

    private setMenu(menu: Menu[]) {
        this.menuService.addNamespace(menu, 'menu');
        this.menuService.set(menu);
    }

    private setPermissions(user: User) {
        // In a real app, you should get permissions and roles from the user information.

        const permissionsEtudiant = ['canRead'];
        const permissionsEnseignant = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
        const permissionsAdmin = ['canAdd', 'canDelete', 'canEdit', 'canRead', 'isAdmin'];

        let permissions: string[] = [];


        let roles = user.roles;

        if (roles) {
            let role = roles[0];


            if (role === ROLE.ETUDIANT) {
                permissions = permissionsEtudiant;
            }
            if (role === ROLE.ENSEIGNANT) {
                permissions = permissionsEnseignant;
            }
            if (role === ROLE.ADMIN) {
                permissions = permissionsAdmin;
            }

            this.permissonsService.loadPermissions(permissions);
            this.rolesService.flushRoles();
            this.rolesService.addRoleWithPermissions(role, permissions);
        }

        // this.permissonsService.loadPermissions(permissions);
        // this.rolesService.flushRoles();
        // this.rolesService.addRoles({ ADMIN: permissions });


        // Tips: Alternatively you can add permissions with role at the same time.
        // this.rolesService.addRolesWithPermissions({ ADMIN: permissions });
    }
}
