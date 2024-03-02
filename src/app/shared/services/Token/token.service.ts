import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokensecret:string='mayakey2024'
  constructor(private router : Router) {
    
  }

  getAccessToken() {
    return (typeof window !== "undefined") ? localStorage.getItem(this.tokensecret):null;
  }

  getUserDetails() {
    const token = this.getAccessToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    let authToken = this.getAccessToken();
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem(this.tokensecret) !== null) {
      this.router.navigate(['/admin']);
    }
  }

}
