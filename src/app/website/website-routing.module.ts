import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {path:'', component:WebsiteComponent,
  children: [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'services', component:ServicesComponent},
    {path: 'product', component:ProductsComponent},
    {path: 'contact', component:ContactComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
