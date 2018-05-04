import {Course} from './model/course';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';


export interface CoursesState extends EntityState<Course> {



}


export const adapter : EntityAdapter<Course> =
  createEntityAdapter<Course>();



