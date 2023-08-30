import { KeycloakConfig } from 'keycloak-js';

export const keycloakConfig: KeycloakConfig = {
   url: 'http://localhost:8024/auth',
   realm: 'dev',
   clientId: 'angular-test',
};

