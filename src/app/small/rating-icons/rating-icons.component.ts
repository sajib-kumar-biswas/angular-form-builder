import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-icons',
  templateUrl: './rating-icons.component.html',
  styleUrls: ['./rating-icons.component.css']
})
export class RatingIconsComponent {
  @Input() colored = 'primary'
  @Input() level = 3;
  @Input() symbol = 'verified'
}
