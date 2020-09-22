import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.scss']
})
export class RoutingTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigateByUrl('www.google.com');
  }

}
