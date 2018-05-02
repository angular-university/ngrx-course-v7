import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CourseEffects } from './course.effects';

describe('CourseService', () => {
  let actions$: Observable<any>;
  let effects: CourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
