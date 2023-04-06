import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  questions: any[] = []
  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.questions = this.main.content;
  }
}
