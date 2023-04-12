import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ranking } from 'src/app/interfaces/ranking';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input() question : any;
  @Input() question_number: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();

  
  constructor(private main: MainService) {}

  ngOnInit(): void {
    
  }

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }

  clickedOnFront(event: Event) {
    event.stopPropagation();
    this.question.showFront = !this.question.showFront;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }

}
