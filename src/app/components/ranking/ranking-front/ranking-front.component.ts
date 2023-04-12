import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-front',
  templateUrl: './ranking-front.component.html',
  styleUrls: ['./ranking-front.component.css']
})
export class RankingFrontComponent {
  @Input() question: any;
  @Input() question_number: any;
}
