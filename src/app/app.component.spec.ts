import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import { AppComponent } from './app.component';

function buildMockObject() {
  const mock = new AppServiceService();
  mock.getTestMessage = jasmine.createSpy('testMessage').and.returnValue('Amir');
  mock.getObservableMessage = jasmine.createSpy('getObservableMessage').and.returnValue(of('test message').pipe(delay(10)));
  return mock;
}

function buildMockObjectWithSpy() {
  const mock = jasmine.createSpyObj('AppServiceService', ['getTestMessage', 'getObservableMessage']);
  mock.getTestMessage.and.returnValue('Amir');
  mock.getObservableMessage.and.returnValue(of('test message').pipe(delay(10)));
  return mock;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockService;

  beforeEach(async(() => {
    mockService = buildMockObjectWithSpy();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppServiceService, useValue: mockService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('display', () => {

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Mohammad');
    expect(element.querySelector('.header').textContent).toContain('ali');
  });

  it('display test by debug', () => {
    const element = fixture.debugElement;
    const queried = element.query(By.css('.header'));
    expect(queried.nativeElement.textContent).toContain('ali');
  });

  it('change title', () => {
    const title = fixture.debugElement.query(By.css('#title'));
    component.title = 'ali';
    fixture.detectChanges();
    expect(title.nativeElement.textContent).toBe('ali');
  });

  it('clicking should change title to ali', () => {
    const button = fixture.debugElement.query(By.css('#change-title')).nativeElement as HTMLButtonElement;
    const title = fixture.debugElement.query(By.css('#title')).nativeElement as HTMLElement;
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(title.textContent).toBe('Ali');
  });

  it('correct service message', () => {
    const serviceMessage = fixture.debugElement.query(By.css('#service')).nativeElement as HTMLElement;
    expect(serviceMessage.textContent).toBe('Amir');
    expect(mockService.getTestMessage).toHaveBeenCalled();
  });

  it('component c', () => {
    fixture.detectChanges();
    const delayedMessage = fixture.debugElement.query(By.css('#delayed-message')).nativeElement as HTMLElement;
    expect(delayedMessage.textContent).toBe('test message');
  });

  it('test', () => {
    const testService = jasmine.createSpyObj('TestService', ['testMessage']);
    testService.testMessage.and.returnValue('Hello');
    expect(testService.testMessage()).toBe('Hello');
    expect(testService.testMessage).toHaveBeenCalled();
  });

});
