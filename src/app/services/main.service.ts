import { Injectable } from '@angular/core';
import { Header } from '../interfaces/header';

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

  getQuestions() {
    localStorage.setItem('questions', JSON.stringify(this.content));
    const stringified = localStorage.getItem('questions');
    const questions = stringified ? JSON.parse(stringified) : null;
    return questions;
  }

  getHeader() {
    localStorage.setItem('header', JSON.stringify(this.header));
    const headerStringified = localStorage.getItem('header');
    const headerContent = headerStringified ? JSON.parse(headerStringified) : null;
    return headerContent;
  }

  constructor() { }
}
