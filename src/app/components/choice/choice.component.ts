import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent implements OnInit {
  @Input() question: any;
  @Input() question_number: any;

  constructor(private main: MainService) {}

  ngOnInit(): void {
   
  }

  clickedOnFront(event: Event) {
    event.stopPropagation();
    this.question.showFront = !this.question.showFront;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }

  // ngOnChanges() {}

}
