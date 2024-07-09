import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface Question {
  position: number;
  question: string;
  assessmentId: string;
  given_answer: string;
}

@Component({
  selector: 'app-test-board',
  templateUrl: './test-board.component.html',
  styleUrl: './test-board.component.css'
})
export class TestBoardComponent {
  assessmentId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assessmentId = 'Assessment ID: ' + params.get('id');
      console.log('Board ID:', this.assessmentId);
      for(let i = 0; i<this.QUESTIONS.length; i++) {
        this.QUESTIONS[i].assessmentId = this.assessmentId;
      }
    });
  }
  position: number = 0;
  QUESTIONS: Question[] = [
    {position: 1, assessmentId: 'Assessment - 2', question: 'What is the basic unit of life?', given_answer: ''},
    {position: 2, assessmentId: 'Assessment - 2', question: 'Which organelle is known as the powerhouse of the cell?', given_answer: ''},
    {position: 3, assessmentId: 'Assessment - 2', question: 'What molecule carries genetic information in most living organisms?', given_answer: ''},
    {position: 4, assessmentId: 'Assessment - 2', question: 'What process do plants use to convert sunlight into chemical energy?', given_answer: ''},
    {position: 5, assessmentId: 'Assessment - 2', question: 'What is the name of the protein that speeds up chemical reactions in the body?', given_answer: ''},
  ];
  previous() {
    if(this.position!=0){
      this.position = this.position - 1; 
    }
  }
  next() {
    if(this.position!= this.QUESTIONS.length - 1){
      this.position = this.position + 1; 
    } else {
      let attemptedQuestion: string = JSON.stringify(this.QUESTIONS, null, 2);
      console.log(attemptedQuestion);
      localStorage.setItem('attemptedQuestions', attemptedQuestion);
    }
  }
}
