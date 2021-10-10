import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerappRoutingModule } from './customerapp-routing.module';
import { CustomerappComponent } from './customerapp.component';
import { MaterialUiModule } from '../common-resources/material-ui/material-ui.module';


@NgModule({
  declarations: [
    CustomerappComponent
  ],
  imports: [
    CommonModule,
    CustomerappRoutingModule,
    MaterialUiModule

  ]
})
export class CustomerappModule { }
