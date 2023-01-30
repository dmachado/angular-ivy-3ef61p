import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estabelecimento } from 'src/app/estabelecimento/estabelecimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  apresentaEstabelecimento(estabelecimento: Estabelecimento) {}
}
