import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Estabelecimento } from './estabelecimento';

@Injectable({
  providedIn: 'root',
})
export class EstabelecimentoService {
  serviceURL =
    'https://vl8y5j6hwl.execute-api.sa-east-1.amazonaws.com/default/ObterEstabelecimento';

  estabelecimento$: Observable<Estabelecimento>;
  private estabelecimentoSubject: Subject<Estabelecimento>;
  private _estabelecimento: Estabelecimento;

  constructor(private http: HttpClient) {
    this.estabelecimentoSubject = new Subject<Estabelecimento>();
    this.estabelecimento$ = this.estabelecimentoSubject.asObservable();
  }

  getEstabelecimento(params) {
    //const p = new HttpParams().set('cnes', '5360056');

    //const h = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    return this.http
      .get<Estabelecimento>(this.serviceURL, {
        params: params,
        //headers: h,
      })
      .subscribe((data: Estabelecimento) => {
        this._estabelecimento = data;
        this.estabelecimentoSubject.next(data);
      });
  }
}
