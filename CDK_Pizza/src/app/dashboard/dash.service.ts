import { IPizza } from 'src/app/interfaces/i-pizza';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class DashService {

  PIZZE_API = environment.PIZZE_API

  constructor(  private http:HttpClient ) { }

  getPizze(){
    return this.http.get<IPizza[]>(this.PIZZE_API)
  }

  getById(id:number){
    return this.http.get<IPizza>(`${this.PIZZE_API}/${id}`);
  }

  writePizza(nuovaPizza:IPizza){
    return this.http.post<IPizza>(this.PIZZE_API, nuovaPizza)
  }

  putPizza(pizzaMOdificata:Partial<IPizza>){
    return this.http.put<IPizza>(`${this.PIZZE_API}/${pizzaMOdificata.id}`,pizzaMOdificata)
  }

  deletePizza(id:number){
    return this.http.delete<IPizza>(`${this.PIZZE_API}/${id}`)
  }
}
