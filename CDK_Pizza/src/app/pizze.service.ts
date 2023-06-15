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
  PIZZE_DISP = environment.PIZZE_DISP
  PIZZE_NONDISP = environment.PIZZE_NONDISP

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  getPizzeDisp(){
    return this.http.get<IPizza[]>(this.PIZZE_DISP)
  }

  getPizzeNonDisp(){
    return this.http.get<IPizza[]>(this.PIZZE_NONDISP)
  }

  getChef(){
    return this.http.get<UserBerlusconi[]>(this.CHEF_API)
  }
}
