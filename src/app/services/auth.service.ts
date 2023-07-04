import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  authenticate(login: string, password: string) {
    return this.httpClient
      .post<any>(this.apiUrl + '/user/login', { login, password })
      .pipe(
        map((userData) => {
          const token = userData.token as string;
          const tokenInfo = this.getDecodedAccessToken(token); // decode token

          sessionStorage.setItem('token', token);
          sessionStorage.setItem('login', tokenInfo.login);
          sessionStorage.setItem('key', tokenInfo.key);
          sessionStorage.setItem('userId', tokenInfo.id);
          return userData;
        })
      );
  }

  RegisterEtudiant(
    nom: String,
    prenom: String,
    telephone: String,
    email: String,
    date_naissance: Date,
    lieu_naissance: String
  ) {
    return this.httpClient
      .post<any>(this.apiUrl + '/etudiant', {
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        email: email,
        date_naissance: date_naissance,
        lieu_naissance: lieu_naissance,
      })
      .pipe(
        map((userData) => {
          return userData;
        })
      );
  }

  changerMotDePasse(id: string, password: string) {
    return this.httpClient
      .put<any>(this.apiUrl + '/user/' + id, {
        password,
      })
      .pipe(
        map((userData) => {
          return userData;
        })
      );
  }

  getUserById(id: string) {
    return this.httpClient.get<any>(this.apiUrl + '/user/' + id);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('userId');
  }
}
