import { Component, Input } from '@angular/core';
import { Header } from 'src/app/interfaces/header';

@Component({
  selector: 'app-header-pre',
  templateUrl: './header-pre.component.html',
  styleUrls: ['./header-pre.component.css']
})
export class HeaderPreComponent {
  @Input() header !: Header; 
}
