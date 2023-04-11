import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnDestroy {
  @Input() value = 'option';
  @Input() placeholder = 'option';
  @Output() removeThis = new EventEmitter<void>();
  @Input() option_number = 0;
  @Input() question_number = 0;
  @Input() options: string[] = [];
  @Output() newValue = new EventEmitter<string>();

  constructor(private main: MainService) {}

  removeThisOption(event: Event) {
    event.stopPropagation();
    this.removeThis.emit();
    console.log("Clicked")
  }

  ngOnDestroy(): void {
    this.newValue.emit(this.value);
  }
  
}
