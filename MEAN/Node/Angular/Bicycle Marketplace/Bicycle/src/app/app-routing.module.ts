import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { ProductComponent } from './product/product.component';
import { UserPageComponent } from './user-page/user-page.component';
const routes: Routes = [

  { path: 'Login', pathMatch: 'full', component: LoginComponent },
  { path: 'User', pathMatch: 'full', component: UserPageComponent },
  { path: 'Browse', pathMatch: 'full', component: BrowseComponent },
  { path: 'Products', pathMatch: 'full', component: ProductComponent },
  { path: '', pathMatch: 'full', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
