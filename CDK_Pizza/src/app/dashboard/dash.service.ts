import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IPizza } from '../interfaces/i-pizza';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  PIZZE_API = environment.PIZZE_API

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  writePizza(nuovaPizza:IPizza){
    return this.http.post<IPizza>(this.PIZZE_API, nuovaPizza)
  }
}
