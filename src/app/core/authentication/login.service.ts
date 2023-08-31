import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Token} from './interface';
import {Menu, TokenService} from '@core';
import {MENU} from './menu';
import {of} from "rxjs";
import {environment} from "@env/environment";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    _menu: Menu[] = MENU;

    constructor(protected http: HttpClient, private tokenService: TokenService) {
    }

    login(username: string, password: string, rememberMe = false) {
        // return this.http.post<Token>('/auth/login', { username, password, rememberMe });
        return this.http.post<Token>(environment.apiUrl + '/login', {username, password});
    }

    refresh(params: Record<string, any>) {
        return this.http.post<Token>('/auth/refresh', params);
    }

    logout() {
        return this.http.post<any>('/auth/logout', {});
    }

    me() {
        // return this.http.get<User>('/me');

        if (!this.tokenService.valid()) return of({});

        let profil = this.tokenService.profil;
        let user = profil[0].infosPersonnelles.utilisateur;

        user.infosPersonnelles = profil[0].infosPersonnelles;
        user.profils = profil;
        user.roles = profil.map(p => p.role);

        return of(user);

        // return this.http.get<User>(environment.apiUrl +'/utilisateurs/'+ this.tokenService.userID)
    }

    menu() {
        // return this.http.get<{ menu: Menu[] }>('/me/menu')
        //     .pipe(
        //         map(res => res.menu)
        //     );
        return of(this._menu);
    }
}
