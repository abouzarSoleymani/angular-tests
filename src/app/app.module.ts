import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LecturesModule } from './lectures/lectures.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LecturesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
