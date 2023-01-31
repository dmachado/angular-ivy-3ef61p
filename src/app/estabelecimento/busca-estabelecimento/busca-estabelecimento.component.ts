import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { EstabelecimentoService } from '../estabelecimento.service';
import { Estabelecimento } from '../estabelecimento';

@Component({
  selector: 'app-busca-estabelecimento',
  templateUrl: './busca-estabelecimento.component.html',
  styleUrls: ['./busca-estabelecimento.component.css'],
})
export class BuscaEstabelecimentoComponent implements OnInit {
  constructor(private estabelecimentoService: EstabelecimentoService) {}

  ngOnInit() {}

  //value = '3348938';

  retrieveEstabelecimento(value) {
    this.estabelecimentoService
      .getEstabelecimento({ cnes: value })
      .subscribe((data: Estabelecimento) => {});
  }
}
