import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Deuda } from 'src/app/models/Deuda';

@Injectable({
  providedIn: 'root'
})
export class AdamspayService {

  constructor(private httpClient: HttpClientModule) { }

  postDeuda(deuda : Deuda, headers : HttpHeaders) : Observable<Deuda>{
    return this.httpClient.post<Deuda>(this.host+this.path, deuda, {headers: headers})
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
  
  }

}
