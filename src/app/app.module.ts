import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RoutesModule} from "./routes/routes.module";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
