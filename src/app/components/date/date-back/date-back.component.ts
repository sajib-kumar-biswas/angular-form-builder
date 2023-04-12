import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-back',
  templateUrl: './date-back.component.html',
  styleUrls: ['./date-back.component.css']
})
export class DateBackComponent {
  @Input() question: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();
  
  setChoiceStatement(newStatement: string) {
    this.question.statement = newStatement;
  }

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }
}
