import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/interfaces/i-pizza';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-food-drink',
  templateUrl: './food-drink.component.html',
  styleUrls: ['./food-drink.component.scss']
})
export class FoodDrinkComponent implements OnInit {

  pizze:IPizza[] = []

  constructor ( private PizzaSVC:PizzeService ){}

  ngOnInit(){
    this.PizzaSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }
}
