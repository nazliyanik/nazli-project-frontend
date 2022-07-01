import { TestBed } from '@angular/core/testing';

import { DenemeService } from './deneme.service';

describe('DenemeService', () => {
  let service: DenemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
