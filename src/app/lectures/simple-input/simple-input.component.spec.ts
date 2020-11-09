import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SimpleInputComponent } from './simple-input.component';
import { SimpleService } from './simple-service.service';

describe('WithInputComponent', () => {
  let mockService: jasmine.SpyObj<SimpleService>;
  let fixture: ComponentFixture<SimpleInputComponent>;
  let component: SimpleInputComponent;
  let firstName: HTMLInputElement;
  let lastName: HTMLInputElement;
  let submitButton: HTMLInputElement;
  beforeEach(async(() => {
    mockService = jasmine.createSpyObj<SimpleService>('SimpleService', ['get', 'post']);
    return TestBed.configureTestingModule({
      declarations: [
        SimpleInputComponent
      ],
      providers: [
        { provide: SimpleService, useValue: mockService }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firstName = fixture.debugElement.query(By.css('[placeholder="First Name"]')).nativeElement as HTMLInputElement;
    lastName = fixture.debugElement.query(By.css('[placeholder="Last Name"]')).nativeElement as HTMLInputElement;
    submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement as HTMLInputElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set firstname and lastname manually', () => {
    component.group.patchValue({
      firstName: 'Jahan',
      lastName: 'Dehbashi'
    });
    fixture.detectChanges();
    expect(firstName.value).toBe('Jahan');
    expect(lastName.value).toBe('Dehbashi');
  });

  it('when user inputs something in firstName the value changes in model', () => {
    firstName.value = 'Ali';
    firstName.dispatchEvent(new Event('input'));
    expect(component.group.get('firstName').value).toBe('Ali');
  });

  it('when focus in first name, error required appears', (done) => {
    firstName.focus();
    fixture.detectChanges();
    lastName.focus();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const error = fixture.debugElement.query(By.css('.error')).nativeElement as HTMLInputElement;
      expect(error.textContent).toBe('Required!');
      done();
    });
  });

  it('enter valid name and last name and press post button', () => {
    firstName.value = 'Ali';
    lastName.value = 'Jamali';
    firstName.dispatchEvent(new Event('input'));
    lastName.dispatchEvent(new Event('input'));
    submitButton.click();
    expect(mockService.post).toHaveBeenCalledWith({firstName: 'Ali', lastName: 'Jamali'});
  });

});
