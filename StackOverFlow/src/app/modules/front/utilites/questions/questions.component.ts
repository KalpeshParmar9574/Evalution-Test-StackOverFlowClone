import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questionData!:any
  constructor(private router:Router, private utilities:UtilitiesService) {
  
  }
  ngOnInit() {
    this._getQuestions()
  }

  _navigateToAskQuestionPage() {
    this.router.navigate(['/front/utilities/askQuestions'])
  }

  _getQuestions() {
    this.utilities._getQuetions().subscribe((res) => {
      if (res) {
        this.questionData = res
      }
    }, (error) => {
      console.log(error);
      
    })
  }
}
