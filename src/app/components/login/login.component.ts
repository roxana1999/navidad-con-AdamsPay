import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService : LoginService){}

  ngOnInit(): void {
    this.loginService.login("roxi@gmail.com",'123456');
  }
  

}
