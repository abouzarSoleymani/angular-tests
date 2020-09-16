import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WithStubComponentsComponent } from './with-stub-components.component';

describe('WithStubComponentsComponent', () => {
  let component: WithStubComponentsComponent;
  let fixture: ComponentFixture<WithStubComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithStubComponentsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithStubComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correct message', () => {
    const message = fixture.debugElement.query(By.css('#message')).nativeElement as HTMLElement;
    expect(message.textContent).toBe('Ali');
  });
});
