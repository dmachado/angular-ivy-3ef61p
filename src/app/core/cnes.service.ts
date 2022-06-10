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
    'https://gt8gxlw4q2.execute-api.sa-east-1.amazonaws.com/default/ObterEstabelecimento';

  constructor(private http: HttpClient) {}

  getEstabelecimentoResumo() {
    const params = new HttpParams().set('cnes', '3539717');
    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    return this.http.get<EstabelecimentoResumo>(this.serviceURL, {
      params: params,
    });
  }
}
