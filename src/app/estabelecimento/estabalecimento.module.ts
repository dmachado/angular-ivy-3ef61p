import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuscaEstabelecimentoComponent } from './busca-estabelecimento/busca-estabelecimento.component';
import { ApresentaEstabelecimentoComponent } from './apresenta-estabelecimento/apresenta-estabelecimento.component';
import { EstabelecimentoService } from './estabelecimento.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    BuscaEstabelecimentoComponent,
    ApresentaEstabelecimentoComponent,
  ],
  exports: [BuscaEstabelecimentoComponent, ApresentaEstabelecimentoComponent],
})
export class EstabelecimentoModule {}
