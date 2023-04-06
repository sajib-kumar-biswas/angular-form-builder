import { Component, Input } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-form-header-front',
  templateUrl: './form-header-front.component.html',
  styleUrls: ['./form-header-front.component.css']
})
export class FormHeaderFrontComponent {
  @Input() content: Header = {title: '', description: ''}
}
