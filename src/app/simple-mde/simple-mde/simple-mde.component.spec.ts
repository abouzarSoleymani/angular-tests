import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { SimpleMDEModule } from 'ngx-simplemde-wrapper';
import { HelpService } from './help.service';

import { SimpleMdeComponent } from './simple-mde.component';

describe('SimpleMdeComponent', () => {
  let component: SimpleMdeComponent;
  let fixture: ComponentFixture<SimpleMdeComponent>;
  const helpSerice = jasmine.createSpyObj('HelpService', ['updateHelpSubsection']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMdeComponent ],
      providers: [
        { provide: HelpService, useValue: helpSerice }
      ],
      imports: [
        BrowserModule,
        SimpleMDEModule.initialize()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('server error', () => {
    const teaxtArea = fixture.debugElement.query(By.css('textarea')).nativeElement as HTMLTextAreaElement;

  });
});
