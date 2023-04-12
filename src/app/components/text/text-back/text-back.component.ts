import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-back',
  templateUrl: './text-back.component.html',
  styleUrls: ['./text-back.component.css']
})
export class TextBackComponent {
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
