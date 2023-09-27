import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Injectable()
export class ProductService implements CanActivate {
    constructor(private appService: AppService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.appService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigateByUrl('/register');
            return false;
        }
    }

}