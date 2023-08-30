import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular'
import { KeycloakTokenParsed, KeycloakProfile} from 'keycloak-js'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak: KeycloakService) { }
   
  public getLoggedUser(): KeycloakTokenParsed | undefined{
    try {
      const userDetails: KeycloakTokenParsed | undefined = this.keycloak.getKeycloakInstance()
      .idTokenParsed;
      return userDetails;
    } catch (e){
      console.error("Exception", e);
      return undefined;
    }
  }

  public isLoggedIn() : Promise<boolean>{
    return this.keycloak.isLoggedIn();
  }

  public loadUserProfile() : Promise<KeycloakProfile>{
    return this.keycloak.loadUserProfile();
  }

  public login(): void{
    this.keycloak.login()
  }

  public logout(): void {
    this.keycloak.logout(window.location.origin);
  }

  public redirectToProfile() : void{
    this.keycloak.getKeycloakInstance().accountManagement();
  }

  public getRoles(): string[]{
    return this.keycloak.getUserRoles();
  }

  public getToken(): Promise<string> {
    return this.keycloak.getToken();
  }
  

}

