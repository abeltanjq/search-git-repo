import { TestBed, inject } from '@angular/core/testing';

import { SearchBarStateService } from './search-bar-state.service';

describe('SearchBarStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBarStateService]
    });
  });

  it('should be created', inject([SearchBarStateService], (service: SearchBarStateService) => {
    expect(service).toBeTruthy();
  }));
});
