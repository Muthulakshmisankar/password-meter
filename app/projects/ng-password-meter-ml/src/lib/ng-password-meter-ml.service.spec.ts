import { TestBed } from '@angular/core/testing';

import { NgPasswordMeterMlService } from './ng-password-meter-ml.service';

describe('NgPasswordMeterMlService', () => {
  let service: NgPasswordMeterMlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPasswordMeterMlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
