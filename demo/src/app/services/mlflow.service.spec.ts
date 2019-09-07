import { TestBed } from '@angular/core/testing';

import { MlflowService } from './mlflow.service';

describe('MlflowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlflowService = TestBed.get(MlflowService);
    expect(service).toBeTruthy();
  });
});
