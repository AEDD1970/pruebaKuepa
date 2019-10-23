import { TestBed } from '@angular/core/testing';

import { KuepaService } from './kuepa.service';

describe('KuepaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KuepaService = TestBed.get(KuepaService);
    expect(service).toBeTruthy();
  });
});
