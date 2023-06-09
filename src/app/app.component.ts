import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { Choice } from './interfaces/choice';
import { Rating } from './interfaces/rating';
import { Dated } from './interfaces/date';
import { Ranking } from './interfaces/ranking';
import { Header } from './interfaces/header';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  questions: any[] = [];
  header!: Header;
  showPreview = false;

  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.questions = this.main.getQuestions();
    this.header = this.main.getHeader();
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event) {
    localStorage.setItem('questions', JSON.stringify(this.questions));
    localStorage.setItem('header', JSON.stringify(this.header));
  }

  ngOnDestroy(): void {
    
  }

  showAllQuestionsFront(event?: Event) {
    if (event !== undefined) event.stopPropagation();

    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].showFront = true;
    }
    this.header.showFront = true;
  }

  showAllQuestionsFrontExceptOne(i: number = -1) {
    for (let j = 0; j < this.questions.length; j++) {
      this.questions[j].showFront = true;
    }

    if (i >= 0 && i < this.questions.length) {
      this.questions[i].showFront = false;
      this.header.showFront = true;
      console.log(i);
    }
  }

  previewButtonClicked(event: Event) {
    event.stopPropagation();

    localStorage.setItem('questions', JSON.stringify(this.questions));
    localStorage.setItem('header', JSON.stringify(this.header));

    this.showPreview = !this.showPreview;
  }

  backButtonClicked() {
    this.showPreview = !this.showPreview;
  }

  makeAChoice(event: Event) {
    event.stopPropagation();

    this.showAllQuestionsFront();

    const choice: Choice = {
      statement: 'Question',
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

    this.showAllQuestionsFront();

    const text: any = {
      statement: 'Question',
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

    this.showAllQuestionsFront();

    const rating: Rating = {
      statement: 'Question',
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

    this.showAllQuestionsFront();

    const date: Dated = {
      statement: 'Question',
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

    this.showAllQuestionsFront();

    const ranking: Ranking = {
      statement: 'Question',
      options: ['option1', 'option2'],
      required: true,
      type: 'ranking',
      showFront: false,
      uid: Date.now(),
    };

    this.questions.push({ ...ranking, options: [...ranking.options] });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  removeAQuestion(i: number) {
    this.questions.splice(i, 1);
  }

  makeAChoiceCopy(i: number) {
    this.questions.splice(i + 1, 0, {
      ...this.questions[i],
      options: [...this.questions[i].options],
    });
  }

  makeATextCopy(i: number) {
    this.questions.splice(i + 1, 0, { ...this.questions[i] });
  }

  makeARatingCopy(i: number) {
    this.questions.splice(i + 1, 0, { ...this.questions[i] });
  }

  makeADateCopy(i: number) {
    this.questions.splice(i + 1, 0, { ...this.questions[i] });
  }

  makeARankingCopy(i: number) {
    this.questions.splice(i + 1, 0, {
      ...this.questions[i],
      options: [...this.questions[i].options],
    });
  }
}
