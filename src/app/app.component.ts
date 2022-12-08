import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navidad-con-AdamsPay';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDC0j0rdjOUDvSicabzPg8cM8IPcgJFDjE",
      authDomain: "salvar-la-navidad.firebaseapp.com",
    })
  }

  estaLogueado(){
    const token = this.loginService.getIdToken();
    if (token == null || token=='') return false;
    return true;    
  }
}
