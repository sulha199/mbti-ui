import { TestBed } from '@angular/core/testing';

import { PerspectiveService } from './perspective.service';

describe('PerspectiveService', () => {
  let service: PerspectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerspectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
