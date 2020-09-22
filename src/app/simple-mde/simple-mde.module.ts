import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleMdeComponent } from './simple-mde/simple-mde.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpService } from './simple-mde/help.service';
import { SimpleMDEModule } from 'ngx-simplemde-wrapper';

@NgModule({
  declarations: [
    SimpleMdeComponent
  ],
  imports: [
    SimpleMDEModule.initialize(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ HelpService ]
})
export class SimpleMdeTestModule { }
