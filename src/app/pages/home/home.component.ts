import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  value = '3348938';

  retrieveEstabelecimento() {
    this.cnesService
      .getEstabelecimento({ cnes: this.value })
      .subscribe((data: Estabelecimento) => {
        this.estabelecimento = data;
        console.log(this.value);
        console.log(this.estabelecimento);
      });
  }
}
