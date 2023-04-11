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
  @Input() disable = false;
  @Input() icon = 'cloud_upload'

  @Output() newValue = new EventEmitter<string>();

  passNewValue(newvalue: string) {
    this.newValue.emit(newvalue);
  }
   
}
