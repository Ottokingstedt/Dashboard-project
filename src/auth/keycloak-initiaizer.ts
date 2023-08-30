import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../enivronments/enviroment';

export function initializer(keycloakservice: KeycloakService): () => Promise<boolean>{
    
    const options: KeycloakOptions = {
        config : environment.keycloak,
        loadUserProfileAtStartUp: true,
        initOptions: {
            onLoad: 'check-sso',
            checkLoginIframe: false
        },
        bearerExcludedUrls: ['http://localhost:1337/api/']
    };
    return () => keycloakservice.init(options);

}