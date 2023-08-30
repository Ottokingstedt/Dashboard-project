import { NgModule, APP_INITIALIZER } from "@angular/core";
import { KeycloakAngularModule, KeycloakService} from 'keycloak-angular'
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { initializer } from "./keycloak-initiaizer";
@NgModule({
    declarations: [],
    imports: [KeycloakAngularModule],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]

        },
        AuthGuard,
        AuthService
    ]
})
export class AuthModule{}