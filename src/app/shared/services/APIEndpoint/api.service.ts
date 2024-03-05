import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  api(){
    var Api = "http://192.168.0.20/thecasarealestategroupbackend";
    return Api;
  }
}
