import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDataBerlusconi } from 'src/app/interfaces/login-data-berlusconi';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuCollapsed = true;
  isAdmin = false;
  userExist = false;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ){

    let checkUser = localStorage.getItem('user');

    if(checkUser != null){
      this.userExist = !this.userExist;
    }

  }


  data:LoginDataBerlusconi = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {

      if(accessData.user.admin){
        this.isAdmin = true;
      }
      this.router.navigate(['/dashboard'])

    })
  }



}
