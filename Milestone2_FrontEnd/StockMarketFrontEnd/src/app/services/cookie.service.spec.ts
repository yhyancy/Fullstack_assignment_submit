import { TestBed } from '@angular/core/testing';

import { cookieService } from './cookie.service';

describe('CookieService', () => {
  let service: cookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
