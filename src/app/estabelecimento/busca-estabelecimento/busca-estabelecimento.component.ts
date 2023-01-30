import { Component, OnInit } from '@angular/core';

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

  estabelecimento: Estabelecimento | undefined;

  value = '3348938';

  retrieveEstabelecimento() {
    this.estabelecimentoService
      .getEstabelecimento({ cnes: this.value })
      .subscribe((data: Estabelecimento) => {
        this.estabelecimento = data;
        console.log(this.value);
        console.log(this.estabelecimento);
      });
  }
}
