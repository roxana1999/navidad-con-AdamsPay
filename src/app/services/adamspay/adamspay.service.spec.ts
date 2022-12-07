import { TestBed } from '@angular/core/testing';

import { AdamspayService } from './adamspay.service';

describe('AdamspayService', () => {
  let service: AdamspayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdamspayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
