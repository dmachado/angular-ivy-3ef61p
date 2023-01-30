import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstabelecimentoService } from '../../estabelecimento/estabelecimento.service';
import { Estabelecimento } from '../../estabelecimento/estabelecimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
