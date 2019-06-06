import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetingService = TestBed.get(GreetingService);
    expect(service).toBeTruthy();
  });
});
