import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCheckboxTestComponent } from './mat-checkbox-test.component';

describe('MatCheckboxComponent', () => {
  let component: MatCheckboxTestComponent;
  let fixture: ComponentFixture<MatCheckboxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCheckboxTestComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCheckboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
