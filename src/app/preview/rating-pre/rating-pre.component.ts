import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-pre',
  templateUrl: './rating-pre.component.html',
  styleUrls: ['./rating-pre.component.css']
})
export class RatingPreComponent {
  @Input() question: any; 
}
