import { TestBed } from '@angular/core/testing';

import { NoteabletransactionService } from './noteabletransaction.service';

describe('NoteabletransactionService', () => {
  let service: NoteabletransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteabletransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
