import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from '../estabelecimento';
import { EstabelecimentoService } from '../estabelecimento.service';

@Component({
  selector: 'app-apresenta-estabelecimento',
  templateUrl: './apresenta-estabelecimento.component.html',
  styleUrls: ['./apresenta-estabelecimento.component.css'],
})
export class ApresentaEstabelecimentoComponent implements OnInit {
  constructor(private estabelecimentoService: EstabelecimentoService) {}

  ngOnInit() {}
}
