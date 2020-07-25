import { TestBed } from '@angular/core/testing';

import { HoangService } from './hoang.service';

describe('HoangService', () => {
  let service: HoangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
