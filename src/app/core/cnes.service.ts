import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { EstabelecimentoResumo } from '../shared/estabelecimento-resumo';

@Injectable({
  providedIn: 'root',
})
export class CnesService {
  serviceURL =
    'https://vl8y5j6hwl.execute-api.sa-east-1.amazonaws.com/default/ObterEstabelecimento';

  constructor(private http: HttpClient) {}

  getEstabelecimentoResumo() {
    const p = new HttpParams().set('cnes', '5285127');
    //const h = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    return this.http.get<EstabelecimentoResumo>(this.serviceURL, {
      params: p,
      //headers: h,
    });
  }
}
