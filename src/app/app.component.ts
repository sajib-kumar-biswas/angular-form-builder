import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { Choice } from './interfaces/choice';
import { Rating } from './interfaces/rating';
import { Dated } from './interfaces/date';
import { Ranking } from './interfaces/ranking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  questions: any[] = [];
  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.questions = this.main.getQuestions();
  }

  showAllQuestionsFront(event: Event) {
    event.stopPropagation();
    for(let i=0;i<this.questions.length;i++) {
      this.questions[i].showFront = true;
    }
  }

  makeAChoice(event: Event) {
    event.stopPropagation();

    const choice: Choice = {
      statement: '',
      options: ['option1', 'option2'],
      multiple_answer: false,
      required: true,
      type: 'choice',
      showFront: false,
      uid: Date.now(),
    };

    this.questions.push({ ...choice, options: [...choice.options] });
  }

  makeAText(event: Event) {
    event.stopPropagation();

    const text: any = {
      statement: '',
      long_answer: true,
      required: true,
      showFront: false,
      type: 'text',
      uid: Date.now(),
    };

    this.questions.push({ ...text });
  }

  makeARating(event: Event) {
    event.stopPropagation();

    const rating: Rating = {
      statement: '',
      level: 5,
      symbol: 'star',
      required: true,
      type: 'rating',
      showFront: false,
      uid: Date.now(),
    };

    this.questions.push({ ...rating });
  }

  makeADate(event: Event) {
    event.stopPropagation();

    const date: Dated = {
      statement: 'df',
      required: true,
      showFront: false,
      type: 'date',
      currentDate: new Date(),
      uid: Date.now(),
    };

    this.questions.push({ ...date });
  }

  makeARanking(event: Event) {
    event.stopPropagation();

    const ranking: Ranking = {
      statement: '',
      options: ['option1', 'option2'],
      required: true,
      type: 'ranking',
      showFront: false,
      uid: Date.now(),
    };

    this.questions.push({...ranking, options: [...ranking.options]});
  }
}
