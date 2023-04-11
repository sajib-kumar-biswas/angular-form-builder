import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-pre',
  templateUrl: './date-pre.component.html',
  styleUrls: ['./date-pre.component.css']
})
export class DatePreComponent {
  @Input() question: any;
}
