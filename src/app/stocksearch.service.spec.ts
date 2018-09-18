import { TestBed } from '@angular/core/testing';

import { StocksearchService } from './stocksearch.service';

describe('StocksearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksearchService = TestBed.get(StocksearchService);
    expect(service).toBeTruthy();
  });
});
