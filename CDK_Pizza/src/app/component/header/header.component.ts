import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHome = true;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
  ){
    console.log(this.router);

  }

}
