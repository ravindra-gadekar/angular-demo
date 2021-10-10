import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminappComponent } from './adminapp.component';

const routes: Routes = [
  {path:'', component:AdminappComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminappRoutingModule { }
