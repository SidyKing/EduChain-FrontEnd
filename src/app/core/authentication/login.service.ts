import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';
import {MENU} from './menu';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _menu: Menu[] = MENU;
  constructor(protected http: HttpClient) {}

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('/auth/login', { username, password, rememberMe });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    // return this.http.get<{ menu: Menu[] }>('/me/menu')
    //     .pipe(
    //         map(res => res.menu)
    //     );
    return of(this._menu);
  }
}
