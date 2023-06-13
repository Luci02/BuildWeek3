import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.development';
import { Injectable } from '@angular/core';
import { IPizza } from './interfaces/i-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  PIZZE_API = environment.PIZZE_API

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }
}
