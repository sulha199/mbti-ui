import { TestBed } from '@angular/core/testing';

import { ApiPerspectiveService } from './api-perspective.service';

describe('ApiPerspectiveService', () => {
  let service: ApiPerspectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPerspectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
