import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import jwt_decode from "jwt-decode";
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navidad-con-AdamsPay';
  email = '';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDC0j0rdjOUDvSicabzPg8cM8IPcgJFDjE",
      authDomain: "salvar-la-navidad.firebaseapp.com",
    })
  }

  estaLogueado(){
    const token : string = this.loginService.getIdToken()!;
    if (token == null || token=='') return false;
    const tokenDecoded = jwt_decode<any>(token);
    this.email = tokenDecoded.email;
    //console.log(console.log(tokenDecoded.email));
    return true;    
  }

  borrarEmail(){
    this.email='';
  }
}
