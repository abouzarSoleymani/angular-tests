import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleInputComponent } from './simple-input/simple-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleService } from './simple-input/simple-service.service';

@NgModule({
  declarations: [
    SimpleInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    SimpleService
  ],
  exports: [
    SimpleInputComponent
  ]
})
export class LecturesModule { }
