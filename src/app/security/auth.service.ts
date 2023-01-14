import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';
import { sessionStorageItems } from './auth.constants';
import { Realm, UserDetails } from './auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentRealm: Realm
  private _isLoggedIn = false
  private _isTokenExpired: boolean = false
  private _UserProfile: KeycloakProfile = {}
  private _token: string = ""
  private _roles: string[] = []
  private _userDetails: UserDetails


  constructor(
    private _keycloakInstance: KeycloakService
  ) {
    this._currentRealm = {
      provieder: "",
      name: "",
      displayName: "",
      clientId: "",
      urlCallback: ""
    }
    this._userDetails = { isLoggedIn: false }
  }

  get keycloakInstance(): KeycloakService {
    return this._keycloakInstance;
  }

  get currentRealm(): Realm {
    return this._currentRealm;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set currentRealm(value: Realm) {
    this._currentRealm = value;
  }

  get isTokenExpired(): boolean {
    this._isTokenExpired = this._keycloakInstance.isTokenExpired()
    return this._isTokenExpired;
  }

  get userProfile(): KeycloakProfile {
    return this._UserProfile;
  }

  get token(): string {
    return this._token
  }

  get roles(): string[] {
    this._roles = this._keycloakInstance.getUserRoles(true);
    return this._roles;
  }

  get userDetails(): UserDetails {
    return this._userDetails;
  }


  public initializeKeycloak(realm: Realm): Promise<boolean> {
    return this._keycloakInstance.init({
      config: {
        url: realm.provieder,
        realm: realm.name,
        clientId: realm.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        scope: "openid profile email offline_access",

      },
    });
  }

  public getKeycloakInstancesFromCache() : Promise<boolean>{
    const currentRealmAsString: (string | null) = sessionStorage.getItem(sessionStorageItems.REALM_OBJ)

    if (!currentRealmAsString)
         return Promise.resolve(false)

    const realm: Realm = JSON.parse(currentRealmAsString);

    return this.initializeKeycloak(realm);
  }
  

  public login(realm: Realm): void {
    debugger
    const realmAsString = JSON.stringify(realm);
    sessionStorage.setItem(sessionStorageItems.REALM_OBJ, realmAsString)
    this.initializeKeycloak(realm)
      .then((status) => {
    this.initializeKeycloak(realm)
        console.log("initializeKeycloak  status", status)
        this._keycloakInstance.login({
          action: "login",
          redirectUri: window.location.origin + realm.urlCallback
          
        })

      }).catch(console.error)
  }

  public logut() {
    this._keycloakInstance.logout();
  }


  public tryGetToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this._keycloakInstance.getToken()
        .then(token => {
          this._token = token;
          resolve(token)
        })
        .catch(reject)
    });
  }


  public tryGetUserProfile(): Promise<KeycloakProfile> {
    return new Promise((resolve, reject) => {
      this._keycloakInstance.loadUserProfile()
        .then((value: KeycloakProfile) => {
          this._UserProfile = value;
          resolve(value)
        })
        .catch(reject)
    });
  }

  public checkIsLoggedIn() {
    return new Promise((resolve, reject) => {
      this._keycloakInstance.isLoggedIn()
        .then((isLoggedIn: boolean) => {
          this._isLoggedIn = isLoggedIn;
          resolve(isLoggedIn);
        })
        .catch(reject)
    });
  }

  public loadUserDetails(): Promise<UserDetails> {
    return new Promise((resolve, reject) => {

      this.checkIsLoggedIn()
        .then((isLoggedIn) => {

          if (!isLoggedIn) {
            throw new Error("Usuario no autenticado.");
          }

          return this.tryGetUserProfile()
        })
        .then(() => this.tryGetToken())
        .then(() => {
          
          this._userDetails = {
            isLoggedIn: this._isLoggedIn,
            isTokenExpired: this.isTokenExpired,
            realm: this.currentRealm,
            roles: this.roles,
            userProfile: this._UserProfile,
            tokenParsed: this.parseJwt(this._token),
            token: this._token
          }
          
          // sessionStorage.setItem('token', JSON.stringify(this._token));
          resolve(this._userDetails)
        })
        .catch(reject)
    })
  }


  private parseJwt(token: string): KeycloakTokenParsed {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

}
