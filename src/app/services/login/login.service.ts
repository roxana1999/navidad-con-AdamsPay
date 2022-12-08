import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            localStorage.setItem('UserToken',token);
            this.router.navigate(['/']);
          }
        )
      }
    )
  }

  logout(){
    firebase.auth().signOut().then(
      () => {
        localStorage.setItem('UserToken','');
        this.router.navigate(['/']);
      }
    )
  }

  getIdToken(){
    return localStorage.getItem('UserToken');
  }

}
