import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';
import { AuthService, User } from '@core/authentication';

@Component({
  selector: 'app-user',
  template: `
    <button class="r-full" mat-button [matMenuTriggerFor]="menu">
      <img matButtonIcon class="avatar r-full" [src]="user.avatar" width="24" alt="avatar" />
      <span class="m-x-8">{{ user.name }}</span>
    </button>

    <mat-menu #menu="matMenu">
      
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
<!--        <span>{{ 'user.profile' | translate }}</span>-->
        <span>Profil</span>
      </button>
      
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
<!--        <span>{{ 'user.settings' | translate }}</span>-->
        <span>Paramêtres</span>
      </button>
      
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
<!--        <span>{{ 'user.logout' | translate }}</span>-->
        <span>Déconnexion</span>
      </button>
      
    </mat-menu>
  `,
  styles: [
    `
      .avatar {
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(private router: Router, private auth: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.auth
      .user()
      .pipe(
        tap(user => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
}
