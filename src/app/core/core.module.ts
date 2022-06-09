import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavigationComponent, FooterComponent],
  exports: [NavigationComponent, FooterComponent],
})
export class CoreModule {
  NavigationComponent;
}
