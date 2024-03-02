import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../APIEndpoint/api.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,public url:ApiService) { }

  async adminloign(data:any){
    return await lastValueFrom(this.http.post(`${this.url.api()}/api/login`,data));
  }
}
