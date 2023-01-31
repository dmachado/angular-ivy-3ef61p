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
  estabelecimento: Estabelecimento;

  constructor(private estabelecimentoService: EstabelecimentoService) {
    estabelecimentoService.estabelecimento$.subscribe(
      (estabelecimento: Estabelecimento) =>
        (this.estabelecimento = estabelecimento)
    );
  }

  ngOnInit() {}
}
