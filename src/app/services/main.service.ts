import { Injectable } from '@angular/core';
import { Header } from '../interfaces/header';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  content = [
    {statement: "Which Country do you live in ?", options: ["USA", "BD"], multiple_answer: false, required: true,
    type: 'choice', showFront: true,uid: 89687},
    {statement: "Why do you love competitive programming?", long_answer: true, required: false, showFront: true,
    type: 'text',uid: 89688},
    {statement: "What will be your rating about Material UI?", level: 5, symbol: 'star', required: true, 
    type: 'rating', showFront: true,uid: 89689},
    {statement: "What is your birthday ?", required: true, showFront: true, type: 'date', currentDate: new Date(),
    uid: 89690},
    {statement: "What is the best UI library?", options: ["Material UI", "Daisy UI", "Ant Design", "Chakra UI"],
    required: true, type: 'ranking', showFront: true,uid: 89691}
  ];

  header: Header = {
    title: 'Untitled Form',
    description: 'Sample Form Description',
    showFront: true
  }

  constructor() {
    
  }

  getQuestions() {
    try {
      let str = localStorage.getItem('questions');
      let alwaysStr: string = str === null ? '': str;
      let value = JSON.parse(alwaysStr);
      return value;
    } catch(err) {
      return [];
    }
  }

  getHeader() {
    try {
      let str = localStorage.getItem('header');
      let alwaysStr: string = str === null ? '': str;
      let value = JSON.parse(alwaysStr);
      return value;
    } catch(err) {
      return {...this.header};
    }
}

}
