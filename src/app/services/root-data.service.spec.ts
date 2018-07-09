import { TestBed, inject } from '@angular/core/testing';

import { RootDataService } from './root-data.service';

describe('RootDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootDataService]
    });
  });

  it('should be created', inject([RootDataService], (service: RootDataService) => {
    expect(service).toBeTruthy();
  }));
});
