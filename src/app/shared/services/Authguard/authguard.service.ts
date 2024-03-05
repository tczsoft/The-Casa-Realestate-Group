import { Injectable } from '@angular/core';
import { TokenService } from '../Token/token.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public auth: TokenService, public router: Router/*,private toast:HotToastService*/) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.auth.isLoggedIn() !== true) {
      this.router.navigate(['/admin']);
    }
    return this.CheckLoginAccess(route);
  }

  async CheckLoginAccess(route : any): Promise<boolean>{
    if(this.auth.isLoggedIn()){
      const userRole = this.auth.getUserDetails().data.Role;
      if(route.data['roles'] !=undefined){
        if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1){
          this.router.navigate(['/login']);
          return false;
        }
      }
      return true;
    }
    else{
      //this.toast.warning('Log in to access this area or page!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
