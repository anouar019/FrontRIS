import { TestBed } from '@angular/core/testing';

import { DocumentServService } from './document-serv.service';

describe('DocumentServService', () => {
  let service: DocumentServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
