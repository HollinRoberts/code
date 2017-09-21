import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
   
    { path: 'Home', pathMatch: 'full', component: HomeComponent },
    { path: 'Edit', pathMatch: 'full', component: EditComponent },
    { path: 'Products/:id/Edit', pathMatch: 'full', component: EditComponent },
    { path: 'Products', pathMatch: 'full', component: ProductsComponent },
    { path: 'Create', pathMatch: 'full', component: CreateComponent },
    { path: '', pathMatch: 'full', component: HomeComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }