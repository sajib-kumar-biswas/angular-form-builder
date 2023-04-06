import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Choice } from 'src/app/interfaces/choice';
import { Header } from 'src/app/interfaces/header';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit,OnChanges {

  @Input() id: number = 0;
  
  content: Choice = {
    statement: '',
    options: [],
    multiple_answer: false,
    required: false,
    type: 'choice',
    showFront: false
  }


  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.content = this.main.getSingleQuestion(this.id);
  }

  ngOnChanges() {

  }

}
