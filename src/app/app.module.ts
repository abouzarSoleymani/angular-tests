import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithInputComponent } from './with-input/with-input.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { WithStubComponentsComponent } from './with-stub-components/with-stub-components.component';
import { MockRouterOutletComponent } from './mock-router-outlet/mock-router-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    WithInputComponent,
    RoutingTestComponent,
    WithStubComponentsComponent,
    MockRouterOutletComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
