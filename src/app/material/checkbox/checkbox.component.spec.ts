import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ],
      imports: [
        MatCheckboxModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click checkbox changes enabled', (done) => {
    const checkBox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    expect(component.enabled).toBeFalse();
    expect(checkBox.checked).toBeFalsy();
    checkBox.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.enabled).toBeTruthy();
      expect(checkBox.checked).toBeTruthy();
      done();
    });
  });

  it('changing enabled will alter checkbox state', (done) => {
    const checkBox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    component.enabled = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(checkBox.checked).toBeTrue();
      done();
    });
  });

  it('clicking on checkbox will raise change event', () => {
    spyOn(component, 'change');
    const checkBox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    checkBox.click();
    expect(component.change).toHaveBeenCalled();
  });
});
