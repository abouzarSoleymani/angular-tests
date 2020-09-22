import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-stub-components',
  templateUrl: './with-stub-components.component.html'
})
export class WithStubComponentsComponent implements OnInit {

  constructor() { }
  focus: string;
  ngOnInit(): void {
    this.focus = 'Ali';
  }

}
