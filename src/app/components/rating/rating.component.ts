import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from 'src/app/interfaces/rating';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() question : any;
  @Input() question_number: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();
  @Output() frontClicked = new EventEmitter();

  constructor(private main: MainService) {}

  ngOnInit(): void {
    
  }

  clickedOnFront(event: Event) {
    event.stopPropagation();
    this.frontClicked.emit();
    // this.question.showFront = !this.question.showFront;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }
}
