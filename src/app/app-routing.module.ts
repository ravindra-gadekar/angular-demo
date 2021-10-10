import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./website/website.module').then(m => m.WebsiteModule), data: {preload: true}},
  {path:'customer', loadChildren: ()=> import('./customerapp/customerapp.module').then(m => m.CustomerappModule), data: {preload: true}},
  {path:'admin', loadChildren: ()=> import('./adminapp/adminapp.module').then(m => m.AdminappModule), data: {preload: true}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
