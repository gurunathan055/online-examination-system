import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface ASSESTMENT {
  position: number;
  question: string;
  nlp_answer: string;
  given_answer: string;
  result: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-attempt-question',
  templateUrl: './attempt-question.component.html',
  styleUrl: './attempt-question.component.css'
})
export class AttemptQuestionComponent implements OnInit {
  isVisible: boolean = false;
  isOverAllResultPass: boolean = false;
  ngOnInit(): void {
    let assessment: string = localStorage.getItem('attemptedQuestions') ?? '';
    this.ASSESTMENT = JSON.parse(assessment);
    this.ASSESTMENT[0].nlp_answer = "The cell.";
    this.ASSESTMENT[1].nlp_answer = "The mitochondrion.";
    this.ASSESTMENT[2].nlp_answer = "DNA (Deoxyribonucleic Acid).";
    this.ASSESTMENT[3].nlp_answer = "Photosynthesis.";
    this.ASSESTMENT[4].nlp_answer = "Enzyme.";
    this.ASSESTMENT[0].result = "60";
    this.ASSESTMENT[1].result = "20";
    this.ASSESTMENT[2].result = "80";
    this.ASSESTMENT[3].result = "74";
    this.ASSESTMENT[4].result = "91";
    this.isVisible = true;
    this.dataSource = new MatTableDataSource(this.ASSESTMENT);
    this.isOverAllResultPass = this.isGreaterThanOrPassingPercentage(this.calculateTotalPercentage(this.ASSESTMENT));
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'question', 'nlp_answer', 'given_answer', 'result'];
  ASSESTMENT: ASSESTMENT[] = [];
  dataSource = new MatTableDataSource(this.ASSESTMENT);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isGreaterThanOrPassingPercentage(result: string): boolean {
    return  Number(result) >= 50;
  }

  calculateTotalPercentage(assessment: ASSESTMENT[]): string {
    let total: number = 0;
    for(let i=0; i< assessment.length; i++){
      total = total + Number(assessment[i].result);
    } 
    total = total / assessment.length + 1;
    return  total.toString();
  }
}