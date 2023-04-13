import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitesRoutingModule } from './utilites-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { TagsComponent } from './tags/tags.component';
import { AskQuestionsComponent } from './ask-questions/ask-questions.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { QuestionDetailsComponent } from './question-details/question-details.component'

@NgModule({
  declarations: [
    QuestionsComponent,
    TagsComponent,
    AskQuestionsComponent,
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    UtilitesRoutingModule,
    ReactiveFormsModule,
    FormsModule

    
  ]
})
export class UtilitesModule { }
