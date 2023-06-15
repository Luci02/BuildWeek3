import { IPizza } from './../../interfaces/i-pizza';
import { Component, OnInit } from '@angular/core';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-our-menu-pricing',
  templateUrl: './our-menu-pricing.component.html',
  styleUrls: ['./our-menu-pricing.component.scss']
})
export class OurMenuPricingComponent implements OnInit{

  pizze:IPizza[] = []

  constructor ( private PizzaSVC:PizzeService ){}

  ngOnInit(){
    this.PizzaSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

  ascendente(){
    this.pizze.sort((a:IPizza, b:IPizza)=>{
      return b.price - a.price
    })
    console.log(this.pizze);
  }

  discendente(){
    this.pizze.sort((a:IPizza, b:IPizza)=>{
      return a.price - b.price
    })
    console.log(this.pizze);
  }

  disponibili(){
    this.PizzaSVC.getPizzeDisp().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

  nonDisponibili(){
    this.PizzaSVC.getPizzeNonDisp().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

}
