import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { askQuestion } from 'src/app/Model/askQuestionModel';

@Component({
  selector: 'app-ask-questions',
  templateUrl: './ask-questions.component.html',
  styleUrls: ['./ask-questions.component.css']
})
export class AskQuestionsComponent {
  questionFrom!: FormGroup
  userData!:any
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this._initForm()
  }
  
  _initForm() {
    this.questionFrom = this.fb.group({
      title: new FormControl('', [Validators.required,]),
      details: new FormControl('', [Validators.required, Validators.minLength(20)]),
      trying: new FormControl('', [Validators.required, Validators.minLength(20)]),
      tags: new FormControl('', [Validators.required]),
      QalradyExist: new FormControl('',[])

    })
  }

  _postQuestion() {
    const data = this.questionFrom.getRawValue()
    const tempData = localStorage.getItem('userData')
    if (tempData) {
      this.userData = JSON.parse(tempData) 
    }

    const tagData = data.tags.split(",");

    const body:askQuestion = {
      userID:this.userData.id,
      userName: this.userData.username,
      vote: 0,
      view: 0,
      title: data.title,
      qDescrition: data.details,
      tryandExpectation: data.trying,
      tags: tagData,
      alreadyExiste: '',
      createdAt: new Date().toLocaleString(),
      answers: []
    }

    console.log(body);
    
  }
}
