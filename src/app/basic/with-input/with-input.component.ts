import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-with-input',
  templateUrl: './with-input.component.html',
  styleUrls: ['./with-input.component.scss']
})
export class WithInputComponent {

  @Input()
  name: string;

  model: boolean;

  @Output()
  nameButtonClicked = new EventEmitter<string>();

  constructor() { }

  click() {
    this.nameButtonClicked.emit(this.name);
  }

}
