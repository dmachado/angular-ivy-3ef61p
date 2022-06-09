import { Component, OnInit } from '@angular/core';
import { CnesService } from '../../core/cnes.service';
import { EstabelecimentoResumo } from '../../shared/estabelecimento-resumo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private cnesService: CnesService) {}

  ngOnInit() {}

  estabelecimentoResumo: EstabelecimentoResumo | undefined;

  retrieveEstabelecimentoResumo() {
    this.cnesService
      .getEstabelecimentoResumo()
      .subscribe((data: EstabelecimentoResumo) => undefined);
  }
}
