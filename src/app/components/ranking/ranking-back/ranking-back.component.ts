import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-back',
  templateUrl: './ranking-back.component.html',
  styleUrls: ['./ranking-back.component.css']
})
export class RankingBackComponent {
  @Input() question: any;
}
