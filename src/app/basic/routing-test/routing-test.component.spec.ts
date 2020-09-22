import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Button } from 'protractor';

import { RoutingTestComponent } from './routing-test.component';

function createRouter(): Router {
  const router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  return router;
}

describe('RoutingTestComponent', () => {
  let component: RoutingTestComponent;
  let fixture: ComponentFixture<RoutingTestComponent>;
  let router: Router;

  beforeEach(async(() => {
    router = createRouter();
    TestBed.configureTestingModule({
      declarations: [ RoutingTestComponent ],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call router with correct value', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    expect(router.navigateByUrl).toHaveBeenCalledWith('www.google.com');
  });
});
