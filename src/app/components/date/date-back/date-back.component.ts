import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-back',
  templateUrl: './date-back.component.html',
  styleUrls: ['./date-back.component.css']
})
export class DateBackComponent {
  @Input() question: any;
  
  setChoiceStatement(newStatement: string) {
    this.question.statement = newStatement;
  }
}
