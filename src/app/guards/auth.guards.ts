import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, observable, tap } from "rxjs";
import { AuthService } from "../movieApp/services/auth.service";

@Injectable ({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       // throw new Error("Method not implemented.");
       return this.authService.user.pipe(
           map(user => {
               return !!user;
           }),
           tap(isAuth => {
               if(!isAuth){
                this.router.navigate(['/auth']);   
               }
           })
       );
    }

}