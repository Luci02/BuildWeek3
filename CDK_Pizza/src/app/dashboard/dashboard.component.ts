import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashService } from './dash.service';
import { IPizza } from '../interfaces/i-pizza';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  pizze:IPizza[] = []

  constructor ( private dashSVC:DashService) {}

  @ViewChild('f') form!:NgForm

  creaPizza(){
    console.log(this.form);
    console.log(this.form.value);
    this.dashSVC.writePizza(this.form.value).subscribe((p) => {
      console.log(p);
      this.pizze.push(p)
      console.log(this.pizze);

    })
    this.form.reset()
  }



  ngOnInit(){
    this.dashSVC.getPizze().subscribe(p => {
      console.log(p);
      this.pizze = p
    })
  }

}
