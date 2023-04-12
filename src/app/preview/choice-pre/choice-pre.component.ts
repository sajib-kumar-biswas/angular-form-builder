import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choice-pre',
  templateUrl: './choice-pre.component.html',
  styleUrls: ['./choice-pre.component.css']
})
export class ChoicePreComponent {
  @Input() question: any;
  @Input() question_number: any;
  selectedOne : string;
  
  constructor() {
    this.selectedOne = ''
  }
}
