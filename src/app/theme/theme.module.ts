import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
