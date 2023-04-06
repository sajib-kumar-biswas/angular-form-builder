import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()  showIcon = true;
  @Input() placeholder = ''
  @Input() value = ''

  @Output() newValue = new EventEmitter<string>();

  passNewValue(newvalue: string) {
    this.newValue.emit(newvalue);
  }
   
}
