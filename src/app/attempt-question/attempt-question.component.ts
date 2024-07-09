import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { fail } from 'assert';
export interface Question {
  position: number;
  assessmentId: string;
  question: string;
  given_answer: string;
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
  ngOnInit(): void {
    let assessment: string = localStorage.getItem('attemptedQuestions') ?? '';
    this.ASSESTMENT = JSON.parse(assessment);
    console.log("assessment >>>>>>>>>>>> ");
    console.log(this.ASSESTMENT);
    this.isVisible = true;
    this.dataSource = new MatTableDataSource(this.ASSESTMENT);
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'assessmentId', 'question', 'given_answer'];
  //dataSource = ASSESTMENT;
  ASSESTMENT: Question[] = [];
  dataSource = new MatTableDataSource(this.ASSESTMENT);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
