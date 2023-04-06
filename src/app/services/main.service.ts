import { Injectable } from '@angular/core';
import { Header } from '../interfaces/header';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  content: any[] = [
    {statement: "Which Country do you live in ?", options: ["USA", "BD"], multiple_answer: false, required: true,
    type: 'choice', showFront: false},
    {statement: "Why do love competitive programming?", long_answer: true, required: false, showFront: false,
    type: 'text'},
    {statement: "What will be your rating about Material UI?", level: 5, symbol: 'star', required: true, 
    type: 'rating', showFront: false},
    {statement: "What is your birthday ?", required: true, showFront: false, type: 'date', currentDate: new Date()},
    {statement: "What is the best UI library?", options: ["Material UI", "Daisy UI", "Ant Design", "Chakra UI"],
    required: true, type: 'ranking', showFront: false}
  ];

  header: Header = {
    title: 'Untitled Form',
    description: 'Sample Form Description'
  }

  getSingleQuestion(i: number) {
    if(i>=this.content.length)
      return;
    return this.content[i];
  }

  constructor() { }
}
