import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [

  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'survey', pathMatch: 'full', component: SurveyComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'create', pathMatch: 'full', component: CreateComponent },
  { path: '', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
