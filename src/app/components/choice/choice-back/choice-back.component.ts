import { Component, Input } from '@angular/core';
import { Choice } from 'src/app/interfaces/choice';

@Component({
  selector: 'app-choice-back',
  templateUrl: './choice-back.component.html',
  styleUrls: ['./choice-back.component.css']
})
export class ChoiceBackComponent {
  @Input() content: Choice = {
    statement: '',
    options: [],
    multiple_answer: false,
    required: false,
    type: 'choice',
    showFront: false
  }
}
