import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscription, timer} from 'rxjs';
import {share} from 'rxjs/operators';
import {LocalStorageService} from '@shared';
import {Token} from './interface';
import {BaseToken, JwtToken} from './token';
import {TokenFactory} from './token-factory.service';
import {currentTimestamp, filterObject} from './helpers';
import {Profil} from "../../models/gestion-utilisateurs/profil";

@Injectable({
    providedIn: 'root',
})
export class TokenService implements OnDestroy {
    private key = 'ng-matero-token';

    private change$ = new BehaviorSubject<JwtToken | undefined>(undefined);
    private refresh$ = new Subject<JwtToken | undefined>();
    private timer$?: Subscription;

    constructor(private store: LocalStorageService, private factory: TokenFactory) {
    }

    get payload(): any | void {
        return this.token?.payload;
    }

    get userID(): number | void {
        return this.token?.userID;
    }

    get profil(): Profil[] {
        return this.token?.profil ?? [];
    }

    get sub(): string | void {
        return this.token?.sub
    }

    private _token?: JwtToken;

    get token(): JwtToken | undefined {
        if (!this._token) {
            this._token = this.factory.create(this.store.get(this.key)) as JwtToken;
        }

        return this._token;
    }

    change(): Observable<JwtToken | undefined> {
        return this.change$.pipe(share());
    }

    refresh(): Observable<JwtToken | undefined> {
        this.buildRefresh();

        return this.refresh$.pipe(share());
    }

    set(token?: Token): TokenService {
        this.save(token);

        return this;
    }

    clear(): void {
        this.save();
    }

    valid(): boolean {
        return this.token?.valid() ?? false;
    }

    getBearerToken(): string {
        return this.token?.getBearerToken() ?? '';
    }

    getRefreshToken(): string | void {
        return this.token?.refresh_token;
    }

    ngOnDestroy(): void {
        this.clearRefresh();
    }

    private save(token?: Token): void {
        this._token = undefined;

        if (!token) {
            this.store.remove(this.key);
        } else {
            // const value = Object.assign(
            //     {token: '', token_type: 'Bearer'}, token,
            //     {exp: token.expires_in ? currentTimestamp() + token.expires_in : null,}
            // );
            // this.store.set(this.key, filterObject(value));

            this._token = new JwtToken(token);
            this.store.set(this.key, token);
        }

        this.change$.next(this.token);
        this.buildRefresh();
    }

    private buildRefresh() {
        this.clearRefresh();

        if (this.token?.needRefresh()) {
            this.timer$ = timer(this.token.getRefreshTime() * 1000).subscribe(() => {
                this.refresh$.next(this.token);
            });
        }
    }

    private clearRefresh() {
        if (this.timer$ && !this.timer$.closed) {
            this.timer$.unsubscribe();
        }
    }

}
