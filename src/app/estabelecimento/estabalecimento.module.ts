import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaEstabelecimentoComponent } from './busca-estabelecimento/busca-estabelecimento.component';
import { ApresentaEstabelecimentoComponent } from './apresenta-estabelecimento/apresenta-estabelecimento.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BuscaEstabelecimentoComponent,
    ApresentaEstabelecimentoComponent,
  ],
  exports: [BuscaEstabelecimentoComponent, ApresentaEstabelecimentoComponent],
})
export class EstabelecimentoModule {}
