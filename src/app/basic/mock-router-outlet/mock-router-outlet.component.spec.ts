import { Directive, HostListener, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockRouterOutletComponent } from './mock-router-outlet.component';

@Directive({
  selector: '[routerLink]'
})
class RouterLink {
  @Input()
  routerLink: any = null;

  navigatedTo: any = null;

  @HostListener('click')
  clicked() {
    this.navigatedTo = this.routerLink;
  }
}

describe('MockRouterOutletComponent', () => {
  let component: MockRouterOutletComponent;
  let fixture: ComponentFixture<MockRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockRouterOutletComponent, RouterLink ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click dashboard', () => {
    const dashboardRouterLink = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(dashboardRouterLink.length).toBe(3);
    const dshboardOutlet = dashboardRouterLink[0].injector.get(RouterLink);
    dashboardRouterLink[0].nativeElement.click();
    expect(dshboardOutlet.navigatedTo).toBe('/dashboard');
  });

  it('click heroes', () => {
    const dashboardRouterLink = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(dashboardRouterLink.length).toBe(3);
    const dshboardOutlet = dashboardRouterLink[1].injector.get(RouterLink);
    dashboardRouterLink[1].nativeElement.click();
    expect(dshboardOutlet.navigatedTo).toBe('/heroes');
  });

  it('click about', () => {
    const dashboardRouterLink = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(dashboardRouterLink.length).toBe(3);
    const dshboardOutlet = dashboardRouterLink[2].injector.get(RouterLink);
    dashboardRouterLink[2].nativeElement.click();
    expect(dshboardOutlet.navigatedTo).toBe('/about');
  });
});
