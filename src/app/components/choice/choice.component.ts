import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit {
  @Input() question: any;
  @Input() question_number: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();
  @Output() frontClicked = new EventEmitter();

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
    this.frontClicked.emit();
    // this.question.showFront = !this.question.showFront;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }

  // ngOnChanges() {}

}
