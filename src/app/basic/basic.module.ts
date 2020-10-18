import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WithInputComponent } from './with-input/with-input.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { WithStubComponentsComponent } from './with-stub-components/with-stub-components.component';
import { MockRouterOutletComponent } from './mock-router-outlet/mock-router-outlet.component';
import { AppTestComponent } from './app/app-test.component';

@NgModule({
  declarations: [
    WithInputComponent,
    RoutingTestComponent,
    WithStubComponentsComponent,
    MockRouterOutletComponent,
    AppTestComponent,
  ],
  imports: [
    BrowserModule
  ],
})
export class BasicModule { }
