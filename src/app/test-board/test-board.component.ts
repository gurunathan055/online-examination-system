import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface Question {
  position: number;
  question: string;
  nlp_answer: string;
  given_answer: string;
  result: string;
}

@Component({
  selector: 'app-test-board',
  templateUrl: './test-board.component.html',
  styleUrl: './test-board.component.css'
})
export class TestBoardComponent {
  assessmentId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assessmentId = 'Assessment ID: ' + params.get('id');
    });
  }
  position: number = 0;
  QUESTIONS: Question[] = [
    { position: 1, question: 'What is the basic unit of life?', nlp_answer: '', given_answer: '',  result: ''},
    { position: 2, question: 'Which organelle is known as the powerhouse of the cell?', nlp_answer: '', given_answer: '' ,  result: ''},
    { position: 3, question: 'What molecule carries genetic information in most living organisms?', nlp_answer: '', given_answer: '' ,  result: ''},
    { position: 4, question: 'What process do plants use to convert sunlight into chemical energy?', nlp_answer: '', given_answer: '' ,  result: ''},
    { position: 5, question: 'What is the name of the protein that speeds up chemical reactions in the body?', nlp_answer: '', given_answer: '' ,  result: ''},
  ];
  previous() {
    if (this.position != 0) {
      this.position = this.position - 1;
    }
  }
  next() {
    if (this.position != this.QUESTIONS.length - 1) {
      this.position = this.position + 1;
    } else {
      let attemptedQuestion: string = JSON.stringify(this.QUESTIONS, null, 2);
      console.log(attemptedQuestion);
      localStorage.setItem('attemptedQuestions', attemptedQuestion);
    }
  }
}
