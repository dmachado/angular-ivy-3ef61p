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
  configUrl =
    'https://q7pus3has5.execute-api.sa-east-1.amazonaws.com/default/fetchEstabelecimentoResumo';

  constructor(private http: HttpClient) {}

  getEstabelecimentoResumo() {
    const params = new HttpParams().set('cnpj', '43611490000337');

    const headers = new HttpHeaders()
      //.set('Referer', 'https://cnes.datasus.gov.br/')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<EstabelecimentoResumo>(this.configUrl);
  }
}
