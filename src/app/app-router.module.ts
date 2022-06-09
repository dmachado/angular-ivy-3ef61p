import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DuvidasFrequentesComponent } from './pages/duvidas-frequentes/duvidas-frequentes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'duvidas-frequentes', component: DuvidasFrequentesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
