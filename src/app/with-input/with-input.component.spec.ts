import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WithInputComponent } from './with-input.component';

@Component({
  template: `
    <app-with-input [name]="name" (nameButtonClicked)="click($event)" >
    </app-with-input>
  `
})
class HostComponent {
  name: string;
  eventValue: string;
  click (event: string) {
    this.eventValue = event;
  }
}

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;
  let hostFixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInputComponent, HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on button raises event', (done) => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    component.name = 'Hojjat';
    component.nameButtonClicked.subscribe(x => {
      expect(x).toBe('Hojjat');
      done();
    });
    button.dispatchEvent(new Event('click'));
  });

  it('click on button with click', (done) => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    component.name = 'Hojjat';
    component.nameButtonClicked.subscribe(x => {
      expect(x).toBe('Hojjat');
      done();
    });
    button.click();
  });

  it('host makes an input to child', () => {
    const button = hostFixture.debugElement.query(By.css('app-with-input button')).nativeElement as HTMLButtonElement;
    hostComponent.name = 'Ali';
    hostFixture.detectChanges();
    button.click();
    hostFixture.detectChanges();
    expect(hostComponent.eventValue).toBe('Ali');
  });
});
