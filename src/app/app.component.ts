import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  serviceMessage: string;

  constructor(private service: AppServiceService) {
    this.title = 'Mohammad';
    this.serviceMessage = service.getTestMessage();
  }

  onClick() {
    this.title = 'Ali';
  }

}
