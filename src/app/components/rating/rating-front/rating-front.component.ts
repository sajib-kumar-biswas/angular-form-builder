import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-front',
  templateUrl: './rating-front.component.html',
  styleUrls: ['./rating-front.component.css']
})
export class RatingFrontComponent {
  @Input() question: any;
  @Input() question_number: any; 
}
