import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleService } from './simple-service.service';
import { SimpleModel } from './simple.model';

@Component({
  selector: 'app-lecture',
  templateUrl: './simple-input.component.html',
})
export class SimpleInputComponent {
  group: FormGroup;

  constructor(private service: SimpleService) {
    this.group = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('')
    });
  }

  firstNameError(): boolean {
    const control = this.group.get('firstName');
    return control.hasError('required') && control.touched;
  }

  submit(): void {
    if (this.group.valid) {
      this.service.post(this.group.value);
    }
  }
}
