import { TestBed } from '@angular/core/testing';

import { ExamenServService } from './examen-serv.service';

describe('ExamenServService', () => {
  let service: ExamenServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
