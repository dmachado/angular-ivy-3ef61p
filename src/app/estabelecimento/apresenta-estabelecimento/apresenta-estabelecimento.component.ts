import { Component, OnInit, Input } from '@angular/core';
import { Estabelecimento } from '../estabelecimento';

@Component({
  selector: 'app-apresenta-estabelecimento',
  templateUrl: './apresenta-estabelecimento.component.html',
  styleUrls: ['./apresenta-estabelecimento.component.css'],
})
export class ApresentaEstabelecimentoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() estabelecimento: Estabelecimento | undefined;
}
