import { TestBed } from '@angular/core/testing';

import { GuardtokenService } from './guardtoken.service';

describe('GuardtokenService', () => {
  let service: GuardtokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardtokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
