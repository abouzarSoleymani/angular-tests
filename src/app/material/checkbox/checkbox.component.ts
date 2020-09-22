import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  enabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  change() {}
}
