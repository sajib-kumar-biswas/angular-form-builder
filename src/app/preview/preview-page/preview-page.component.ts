import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Header } from 'src/app/interfaces/header';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css'],
})
export class PreviewPageComponent implements OnInit {
  questions: any[] = [];
  header!: Header;

  @Output() backClicked = new EventEmitter(); 

  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.questions = this.main.getQuestions();
    this.header = this.main.getHeader();
  }

  backButtonClicked(event: Event) {
    event.stopPropagation();
    
    this.backClicked.emit();
  }
}
