import { Component, OnInit } from '@angular/core';
import { CnesService } from '../../core/cnes.service';
import { Estabelecimento } from '../../shared/estabelecimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private cnesService: CnesService) {}

  ngOnInit() {}

  estabelecimento: Estabelecimento | undefined;

  retrieveEstabelecimento() {
    this.cnesService.getEstabelecimento().subscribe((data: Estabelecimento) => {
      this.estabelecimento = data;

      console.log(this.estabelecimento.id);
    });
  }
}
