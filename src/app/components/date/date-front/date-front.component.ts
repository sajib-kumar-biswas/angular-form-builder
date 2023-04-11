import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-front',
  templateUrl: './date-front.component.html',
  styleUrls: ['./date-front.component.css']
})
export class DateFrontComponent {
  @Input() question: any;
}
