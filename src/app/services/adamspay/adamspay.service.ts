import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Deuda } from 'src/app/models/Deuda';

@Injectable({
  providedIn: 'root'
})
export class AdamspayService {
  siExiste = "update";
  apiKey = "ap-6d8101268f0c992a874a8212";
  host = "https://staging.adamspay.com";
  payment_path = "/pay/comerciode259/debt/";
  path = "/api/v1/debts";

  constructor(private httpClient: HttpClient) { }

  postDeuda(deuda: Deuda) : Observable<any>{
    let headers = new HttpHeaders();
    let payload = {"debt":deuda};
    headers = headers.append("apikey", this.apiKey).append("Content-Type","application/json");
    // console.log(host+path);
    return this.httpClient.post<any>(this.host+this.path, payload, {headers : headers});
  }

  readDeuda(idDeuda: string) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append("apikey", this.apiKey);
    return this.httpClient.get<any>(this.host+this.path+"/"+idDeuda,{headers : headers});
  }

  goToPaymentLink(idDeuda: string){
    window.location.href = this.host+this.payment_path+idDeuda;
  }
}
