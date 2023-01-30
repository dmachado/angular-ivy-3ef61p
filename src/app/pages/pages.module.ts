import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EstabelecimentoModule } from '../estabelecimento/estabalecimento.module';

@NgModule({
  imports: [CommonModule, FormsModule, EstabelecimentoModule],
  declarations: [HomeComponent],
})
export class PagesModule {}
