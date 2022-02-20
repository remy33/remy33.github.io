import { TestBed } from '@angular/core/testing';

import { NothingService } from './nothing.service';

describe('NothingService', () => {
  let service: NothingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NothingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
