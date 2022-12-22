import { KeycloakProfile, KeycloakTokenParsed } from "keycloak-js"

export interface Realm {
    provieder: string,
    displayName: string | null,
    clientId: string,
    name: string,
    urlCallback: string
}


export interface UserDetails {
    isLoggedIn: boolean,
    realm?: Realm,
    isTokenExpired?: boolean,
    userProfile?: KeycloakProfile,
    tokenParsed?: KeycloakTokenParsed,
    roles?: string[]
}