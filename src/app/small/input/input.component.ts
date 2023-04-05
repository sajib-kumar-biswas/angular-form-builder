import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()  showIcon = true;
  @Input() placeholder = 'Enter the title'
  @Input() value = 'Untitled'
}
