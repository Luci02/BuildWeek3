import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ICart } from 'src/app/interfaces/i-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor ( private cartSVC:CartService) {}

  cart:ICart[] = []

  ngOnInit(){
    this.cartSVC.getCart().subscribe(i => {
      console.log(i);
      this.cart = i

    })
  }
}
