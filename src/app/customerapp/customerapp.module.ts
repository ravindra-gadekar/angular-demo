import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerappRoutingModule } from './customerapp-routing.module';
import { CustomerappComponent } from './customerapp.component';
import { MaterialUiModule } from '../common-resources/material-ui/material-ui.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerappComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CustomerappRoutingModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CustomerappModule { }
