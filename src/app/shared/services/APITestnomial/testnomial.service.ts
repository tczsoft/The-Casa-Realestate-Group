import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../APIEndpoint/api.service';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TestnomialService {

  constructor(private http:HttpClient,private url:ApiService,private token : TokenService) { }

  async getData(page: any, limit : any){
    var paramData = new HttpParams().set('page', page.toString()).set('limit',limit.toString())
    var res = this.http.get(`${this.url.api()}/api/getalltestimonial`,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }, params:paramData})
    return await lastValueFrom(res);
  }

  async saveData(data:any){
    return await lastValueFrom(this.http.post(`${this.url.api()}/api/savetestimonial`,data,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }

  async updateData(data:any){
    return await lastValueFrom(this.http.put(`${this.url.api()}/api/updatetestimonial`,data,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
  async deleteData(id:any){
    return await lastValueFrom(this.http.post(`${this.url.api()}/api/deletetestimonial`,id,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
}
