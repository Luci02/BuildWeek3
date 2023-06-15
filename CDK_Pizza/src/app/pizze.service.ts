import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.development';
import { Injectable } from '@angular/core';
import { IPizza } from './interfaces/i-pizza';
import { UserBerlusconi } from './interfaces/user-berlusconi';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  PIZZE_API = environment.PIZZE_API
  CHEF_API = environment.CHEF_API

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  getChef(){
    return this.http.get<UserBerlusconi[]>(this.CHEF_API)
  }
}
