import { TestBed } from '@angular/core/testing';

import { IBusinessService } from './ibusiness.service';

describe('IBusinessService', () => {
  let service: IBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
