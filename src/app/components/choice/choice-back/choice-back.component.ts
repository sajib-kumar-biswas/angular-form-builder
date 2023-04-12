import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice } from 'src/app/interfaces/choice';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-choice-back',
  templateUrl: './choice-back.component.html',
  styleUrls: ['./choice-back.component.css'],
})
export class ChoiceBackComponent implements OnInit {
  @Input() question: any;
  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();
  // @Input() question_number: number=0;

  // content!: Choice;
  // data: any;
  constructor(private main: MainService) {}

  ngOnInit(): void {
    // this.content = this.question;
  }

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }

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

  addOtherOptionF() {
    this.question.options.push('other')
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.question.options, event.previousIndex, event.currentIndex);
  }
}
