import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-pre',
  templateUrl: './text-pre.component.html',
  styleUrls: ['./text-pre.component.css']
})
export class TextPreComponent {
  @Input() question: any;
  @Input() question_number: any;
  
  answer: string;

  constructor() {
    this.answer = ''
  }
}
