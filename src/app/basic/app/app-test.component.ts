import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppTestServiceService } from './app-test-service.service';

@Component({
  templateUrl: './app-test.component.html'
})
export class AppTestComponent {

  title: string;
  serviceMessage: string;
  delayedMessage: Observable<string>;

  constructor(private service: AppTestServiceService) {
    this.title = 'Mohammad';
    this.serviceMessage = service.getTestMessage();
    this.delayedMessage = service.getObservableMessage();
  }

  onClick() {
    this.title = 'Ali';
  }

}
