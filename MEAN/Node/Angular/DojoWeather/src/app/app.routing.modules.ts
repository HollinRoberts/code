import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: SeattleComponent },
    { path: 'Dallas', pathMatch: 'full', component: DallasComponent },
    { path: 'SanJose', pathMatch: 'full', component: SanJoseComponent },
    { path: 'Chicago', pathMatch: 'full', component: ChicagoComponent },
    { path: 'Burbank', pathMatch: 'full', component: BurbankComponent },
    { path: 'WashingtonDC', pathMatch: 'full', component: WashingtonDcComponent },
    { path: 'Seattle', pathMatch: 'full', component: SeattleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }