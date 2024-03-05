import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from '../APIEndpoint/api.service';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})

export class NoteabletransactionService {

  constructor(private http:HttpClient,private url:ApiService,private token : TokenService) { }

  async getData(page: any, limit : any){
    var paramData = new HttpParams().set('page', page.toString()).set('limit',limit.toString()).set('category','All')
    var res = this.http.get(`${this.url.api()}/api/getallnotabletransaction`,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }, params:paramData})
    return await lastValueFrom(res);
  }

  async saveData(data:any, file :any){
    var datats = new FormData();
    for(let i = 0 ; i < file.length ; i++){
      datats.append(`images[]`,file[i]);
    }
    datats.append('category',data.category);
    datats.append('title',data.title);
    datats.append('price',data.price);
    datats.append('address',data.address);
    datats.append('noofbeds',data.noofbeds);
    datats.append('baths',data.baths);
    datats.append('squarefite',data.squarefite);
    datats.append('description',data.description);
    datats.append('sale_status',data.sale_status);
    return await lastValueFrom(this.http.post(`${this.url.api()}/api/savenotabletransaction`,datats,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }

  async updateData(data:any){
    return await lastValueFrom(this.http.put(`${this.url.api()}/api/updatenotabletransaction`,data,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
  async deleteData(id:any){
    return await lastValueFrom(this.http.post(`${this.url.api()}/api/deletenotabletransaction`,id,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
}
