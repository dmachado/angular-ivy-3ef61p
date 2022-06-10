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

// lambda AWS

// import json
// from botocore.vendored import requests

// def lambda_handler(event, context):

//     headers = {'Referer': 'https://cnes.datasus.gov.br'}

//     cnes = 3539717

//     r_estabelecimento = requests.get('https://cnes.datasus.gov.br/services/estabelecimentos?cnes=' + str(cnes), headers=headers)
//     estabelecimento = r_estabelecimento.json()

//     estabelecimento_id = estabelecimento[0]['id']

//     r_estabelecimento_detalhes = requests.get('https://cnes.datasus.gov.br/services/estabelecimentos/'+ estabelecimento_id, headers=headers)
//     estabelecimento_detalhe = r_estabelecimento_detalhes.json()

//     print(estabelecimento_detalhe)

//     return {
//         'statusCode': 200,
//         'headers': {
//             'Access-Control-Allow-Headers': 'Content-Type',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
//         },
//         'body': json.dumps(estabelecimento_detalhe)
//     }
