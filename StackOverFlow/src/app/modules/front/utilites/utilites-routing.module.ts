import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';

const routes: Routes = [
  {
    path: 'questions',
    component:QuestionsComponent
  },
  {
    path: 'askQuestions',
    component:AskQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitesRoutingModule { }
