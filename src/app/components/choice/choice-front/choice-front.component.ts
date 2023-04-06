import { Component, Input } from '@angular/core';
import { Choice } from 'src/app/interfaces/choice';

@Component({
  selector: 'app-choice-front',
  templateUrl: './choice-front.component.html',
  styleUrls: ['./choice-front.component.css']
})
export class ChoiceFrontComponent {
  @Input() content: Choice = {
    statement: '',
    options: [],
    multiple_answer: false,
    required: false,
    type: 'choice',
    showFront: false
  }

  selectedOption: string = ''

  @Input() num: number = 0;
}
