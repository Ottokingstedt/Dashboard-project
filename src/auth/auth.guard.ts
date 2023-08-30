import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
   protected readonly route: Router,
   protected readonly keycloak: KeycloakService
  ) {
    super(route, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
      return false;
    }

    const requiredRoles = route.data.roles;

    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    const hasRequiredRoles = requiredRoles.every((roles) => this.roles.includes(roles));
    if (hasRequiredRoles) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

  public override async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const canActivate = await super.canActivate(route, state);
    if (canActivate === true) {
      return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }

  public async redirectTo(url: string): Promise<boolean | UrlTree> {
    return this.router.parseUrl(url);
  }
}