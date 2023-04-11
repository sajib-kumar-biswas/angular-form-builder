import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-back',
  templateUrl: './text-back.component.html',
  styleUrls: ['./text-back.component.css']
})
export class TextBackComponent {
  @Input() question: any; 

  setChoiceStatement(newStatement: string) {
    this.question.statement = newStatement;
  }
}
