import { TestBed } from '@angular/core/testing';

import { StackblitzSdkService } from './stackblitz-sdk.service';

describe('StackblitzSdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StackblitzSdkService = TestBed.get(StackblitzSdkService);
    expect(service).toBeTruthy();
  });
});
