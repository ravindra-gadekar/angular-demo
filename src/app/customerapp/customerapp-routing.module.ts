import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerappComponent } from './customerapp.component';

const routes: Routes = [
  {path: '', component: CustomerappComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerappRoutingModule { }
