import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule, AppRouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
