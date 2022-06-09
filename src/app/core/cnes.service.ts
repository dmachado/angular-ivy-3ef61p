import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { EstabelecimentoResumo } from '../shared/estabelecimento-resumo';

@Injectable({
  providedIn: 'root',
})
export class CnesService {
  configUrl = 'https://cnes.datasus.gov.br/services/estabelecimentos';

  constructor(private http: HttpClient) {}

  getEstabelecimentoResumo() {
    return this.http.get<EstabelecimentoResumo>(this.configUrl);
  }
}
