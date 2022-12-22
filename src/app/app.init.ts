import { KeycloakService } from "keycloak-angular";
import { sessionStorageItems } from "./security/auth.constants";
import { Realm } from "./security/auth.interfaces";

export const initializeKeycloak = (keycloak: KeycloakService) => {
    const currentRealmAsString: (string | null) = sessionStorage.getItem(sessionStorageItems.REALM_OBJ)

    if (!currentRealmAsString)
        return () => Promise.resolve(false)

    const realm: Realm = JSON.parse(currentRealmAsString);

    return () => keycloak.init({
        config: {
            url: realm.provieder,
            realm: realm.name,
            clientId: realm.clientId,
        },
        initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        },
    })
}