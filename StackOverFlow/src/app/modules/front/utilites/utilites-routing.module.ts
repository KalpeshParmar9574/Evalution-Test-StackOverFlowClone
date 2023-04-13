import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

const routes: Routes = [
  {
    path: 'questions',
    component:QuestionsComponent
  },
  {
    path: 'askQuestions',
    component:AskQuestionsComponent
  },
  {
    path: 'questionDetails/:id',
    component:QuestionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitesRoutingModule { }
