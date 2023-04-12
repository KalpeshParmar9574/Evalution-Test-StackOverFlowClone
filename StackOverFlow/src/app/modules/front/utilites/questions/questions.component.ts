import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  constructor(private router:Router) {
  
  }
  _navigateToAskQuestionPage() {
    this.router.navigate(['/front/utilities/askQuestions'])
  }
}
