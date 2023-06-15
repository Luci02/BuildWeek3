import { Component } from '@angular/core';
import { RegisterDataBerlusconi } from 'src/app/interfaces/register-data-berlusconi';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authSvc: AuthService
  ){}

  data:RegisterDataBerlusconi = {
    email: '',
    password: '',
    name: '',
    surname: '',
    admin: false,
    image:"../../../assets/chef.png"
  };

  register(){
    this.authSvc.signUp(this.data)
    .subscribe(accessData => {
      alert(accessData.user.name)
    })
  }
}
