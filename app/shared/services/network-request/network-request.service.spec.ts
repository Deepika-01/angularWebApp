import { TestBed } from '@angular/core/testing';

import { NetworkRequestService } from './network-request.service';

describe('NetworkRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkRequestService = TestBed.get(NetworkRequestService);
    expect(service).toBeTruthy();
  });
});
