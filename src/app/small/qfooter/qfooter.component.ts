import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qfooter',
  templateUrl: './qfooter.component.html',
  styleUrls: ['./qfooter.component.css']
})
export class QfooterComponent {
  @Input() multiple_on = true;
  @Input() long_on = true;
  required_on = false;
}
