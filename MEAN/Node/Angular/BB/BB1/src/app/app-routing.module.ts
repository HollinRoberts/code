import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [

  { path: 'Home', pathMatch: 'full', component: HomeComponent },
  { path: 'lets_play', pathMatch: 'full', component: GameComponent },
  { path: 'New', pathMatch: 'full', component: NewQuestionComponent },
  { path: 'Question', pathMatch: 'full', component: QuestionComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
