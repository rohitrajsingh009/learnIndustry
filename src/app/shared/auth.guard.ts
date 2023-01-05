import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServer:GuardService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any  {
  // if(this.authServer.IsLoggedIn())
 if(localStorage.getItem('token')){
   // this.router.navigate(['routingNameA/profile'])
    return true;
  }else{
    alert('please login..to acces this page url')
    this.router.navigate([''])
    return false;
  }
      
  }
  
}
