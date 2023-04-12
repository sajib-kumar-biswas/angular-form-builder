import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Text } from 'src/app/interfaces/text';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  @Input() question: any;
  @Input() question_number: any;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();

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

  onDeleteButtonClicked() {
    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked() {
    this.copyButtonClicked.emit();
  }
}
