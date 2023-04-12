import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Dated } from 'src/app/interfaces/date';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit,OnChanges {
  @Input() question : any;
  @Input() question_number: any;

  constructor(private main: MainService) {}

  ngOnInit(): void {
    
  }

  clickedOnFront(event: Event) {
    event.stopPropagation();
    this.question.showFront = !this.question.showFront;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }
  
  ngOnChanges(): void {

  }
}
