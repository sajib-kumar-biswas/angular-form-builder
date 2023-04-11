import { Component, Input } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-form-header-back',
  templateUrl: './form-header-back.component.html',
  styleUrls: ['./form-header-back.component.css']
})
export class FormHeaderBackComponent {
  @Input() content: Header = {title: '', description: '', showFront: false};

  addTitle(value: string)  {
    this.content.title = value;
  }

  addDescription(value: string) {
    this.content.description = value;
  }
}
