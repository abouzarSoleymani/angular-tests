import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WithInputComponent } from './with-input.component';

describe('WithInputComponent', () => {
  let component: WithInputComponent;
  let fixture: ComponentFixture<WithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInputComponent);
    component = fixture.componentInstance;
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
});
