import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/interfaces/i-pizza';
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

}
