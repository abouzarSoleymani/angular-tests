import { TestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expect to return good message', () => {
    const msg = service.getTestMessage();
    expect(msg).toBe('test-message');
  });

  it('observable should return proper message', (finish) => {
    service.getObservableMessage().subscribe(x => {
      expect(x).toBe('observedMessage');
      finish();
    })
  });

  it('obsevable raise error', (finish) => {
    expect(service.getObservableError().subscribe(x => {
    }, err => {
      expect(err.message).toBe('error happened')
      finish();
    }));
  });
});