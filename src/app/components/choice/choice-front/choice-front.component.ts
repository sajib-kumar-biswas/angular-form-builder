import { Component, Input, OnInit } from '@angular/core';
import { Choice } from 'src/app/interfaces/choice';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-choice-front',
  templateUrl: './choice-front.component.html',
  styleUrls: ['./choice-front.component.css']
})

export class ChoiceFrontComponent implements OnInit {
  // content !: Choice;

  selectedOption: string = ''

  @Input() question: any;
  @Input() question_number: any;
  // @Input() question_number: number = 0;

  constructor(private main: MainService) {}

  ngOnInit(): void {
    // this.content = this.question
  }
}
