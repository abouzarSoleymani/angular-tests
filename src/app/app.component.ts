import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string;
  serviceMessage: string;
  delayedMessage: Observable<string>;

  constructor(private service: AppServiceService) {
    this.title = 'Mohammad';
    this.serviceMessage = service.getTestMessage();
    this.delayedMessage = service.getObservableMessage();
  }

  onClick() {
    this.title = 'Ali';
  }

}
