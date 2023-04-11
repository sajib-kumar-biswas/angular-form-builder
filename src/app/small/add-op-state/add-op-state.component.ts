import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-add-op-state',
  templateUrl: './add-op-state.component.html',
  styleUrls: ['./add-op-state.component.css']
})

export class AddOpStateComponent {
  @Input() regular = true;
  @Input() other = true;
  @Input() statement = false;
  @Input() qnum = 0;

  @Output() addRegularOption = new EventEmitter();
  @Output() addOtherOption = new EventEmitter();
  @Output() addStatement = new EventEmitter();

  constructor(private main: MainService) {}

  addRegularOptionF(event: Event) {
    event.stopPropagation();
    this.addRegularOption.emit();
  }

  addOtherOptionF(event: Event) {
    event.stopPropagation();
    this.addOtherOption.emit();
  }

  addStatementF(event: Event) {
    event.stopPropagation();
    this.addStatement.emit();
  }
}
