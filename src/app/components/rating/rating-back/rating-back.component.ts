import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-back',
  templateUrl: './rating-back.component.html',
  styleUrls: ['./rating-back.component.css']
})
export class RatingBackComponent {
  @Input() question: any; 

  levels = [2,3,4,5,6,7,8,9,10];

  symbols = [{value: 'star', viewValue: 'Star'},{value: 'counter_1', viewValue: 'Number'},
  {value: 'favorite', viewValue: 'Heart'},
  {value: 'workspace_premium', viewValue: 'Ribbon'},
  {value: 'thumb_up', viewValue: 'Thumb like'},
  {value: 'mood', viewValue: 'Smile face'},
  {value: 'tour', viewValue: 'Flag'},
  {value: 'lightbulb', viewValue: 'Lightbulb'},
  {value: 'military_tech', viewValue: 'Trophy'}
  ]

  selectedLevel = this.levels[0]
  selectedSymbol = this.symbols[0].value;

  setChoiceStatement(newStatement: string) {
    this.question.statement = newStatement;
  }
}
