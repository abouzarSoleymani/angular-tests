import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule
  ],
})
export class MaterialModule { }
