import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-front',
  templateUrl: './text-front.component.html',
  styleUrls: ['./text-front.component.css']
})
export class TextFrontComponent {
  @Input() question: any;
  @Input() question_number: any;
  
}
