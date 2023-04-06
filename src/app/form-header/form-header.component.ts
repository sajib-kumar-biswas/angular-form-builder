import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Header } from '../interfaces/header';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})

export class FormHeaderComponent implements OnInit {
  showFront = false;

  content: Header = {title: '',description: ''};

  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.content = this.main.header
  }
}
