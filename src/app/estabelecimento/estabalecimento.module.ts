import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaEstabelecimentoComponent } from './busca-estabelecimento/busca-estabelecimento.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BuscaEstabelecimentoComponent],
  exports: [BuscaEstabelecimentoComponent],
})
export class EstabelecimentoModule {}
