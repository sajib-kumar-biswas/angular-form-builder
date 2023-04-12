import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ranking-back',
  templateUrl: './ranking-back.component.html',
  styleUrls: ['./ranking-back.component.css']
})
export class RankingBackComponent {
  @Input() question: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();

  setChoiceStatement(newStatement: string) {
    this.question.statement = newStatement;
  }

  setChoiceOption(newOption: string, i: number) {
    if(this.question.options.length > i) {
    this.question.options[i] = newOption;
    }
    return;
  }

  removeThisOption(option_number: number) {
    if(this.question.options.length > option_number) {
    this.question.options.splice(option_number, 1);
    console.log(this.question.options)
    }
    return;
  }

  addRegularOptionF() {
    this.question.options.push('option')
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.question.options, event.previousIndex, event.currentIndex);
  }

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }
}
