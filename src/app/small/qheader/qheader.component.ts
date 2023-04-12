import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qheader',
  templateUrl: './qheader.component.html',
  styleUrls: ['./qheader.component.css']
})
export class QheaderComponent {
  @Output() deleteButtonClicked = new EventEmitter();
  @Output() copyButtonClicked = new EventEmitter();

  onDeleteButtonClicked(event: Event) {
    event.stopPropagation();

    this.deleteButtonClicked.emit();
  }

  onCopyButtonClicked(event: Event) {
    event.stopPropagation();

    this.copyButtonClicked.emit();
  }
}
