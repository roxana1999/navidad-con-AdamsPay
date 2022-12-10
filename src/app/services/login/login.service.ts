import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { vaciarCarrito } from 'src/app/components/mi-carrito/functions/vaciarCarrito';

import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(email: string, password: string){
    // firebase.auth().signInWithEmailAndPassword(email, password).then(
    //   response => {
    //     firebase.auth().currentUser?.getIdToken().then(
    //       token => {
    //         localStorage.setItem('UserToken',token);
    //       }
    //     )
    //   }
    // )
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      result => {
        const credential = result.credential as firebase.auth.OAuthCredential;
        const token = credential.idToken;
        localStorage.setItem('UserToken', token!);
        this.router.navigate(['/']);
      }
    );
  }

  logout(){
    firebase.auth().signOut().then(
      () => {
        localStorage.setItem('UserToken','');
        vaciarCarrito();
        this.router.navigate(['/']);
      }
    )
  }

  getIdToken(){
    return localStorage.getItem('UserToken');
  }

}
