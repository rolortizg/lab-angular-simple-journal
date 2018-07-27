import { TestBed, inject } from '@angular/core/testing';

import { RetrieveJournalsService } from './retrieve-journals.service';

describe('RetrieveJournalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveJournalsService]
    });
  });

  it('should be created', inject([RetrieveJournalsService], (service: RetrieveJournalsService) => {
    expect(service).toBeTruthy();
  }));
});
