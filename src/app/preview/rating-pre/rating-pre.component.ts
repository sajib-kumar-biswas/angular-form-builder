import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-pre',
  templateUrl: './rating-pre.component.html',
  styleUrls: ['./rating-pre.component.css']
})
export class RatingPreComponent {
  @Input() question: any;
  @Input() question_number: any;
  
  colored = 'primary'
  till = -1;
  
  clickedOnAIcon(event: Event,iconNumber: number) {
    event.stopPropagation();
    console.log(iconNumber);
    this.till = iconNumber;
  }
}


