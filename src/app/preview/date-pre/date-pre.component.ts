import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-pre',
  templateUrl: './date-pre.component.html',
  styleUrls: ['./date-pre.component.css']
})
export class DatePreComponent {
  @Input() question: any;
  @Input() question_number: any;
  
  minDate : Date;
  maxDate : Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date();
  }
}
