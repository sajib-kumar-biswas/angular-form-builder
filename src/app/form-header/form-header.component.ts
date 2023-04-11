import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Header } from '../interfaces/header';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})

export class FormHeaderComponent implements OnInit {
  @Input() content: Header = {title: '',description: '', showFront: true};

  constructor(private main: MainService) {}

  ngOnInit(): void {
    
  }

  clickedOnFront(event: Event) {
    event.stopPropagation();
    this.content.showFront = false;
  }

  clickedOnBack(event: Event) {
    event.stopPropagation();
  }
}
