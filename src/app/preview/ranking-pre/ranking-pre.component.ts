import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-pre',
  templateUrl: './ranking-pre.component.html',
  styleUrls: ['./ranking-pre.component.css']
})
export class RankingPreComponent {
  @Input() question: any;
  @Input() question_number: any;
   
}
