import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../courses/action-types";
import { Course } from "../courses/model/course";

export interface CoursesState extends EntityState<Course> {

}

export const adapter = createEntityAdapter<Course>();

export const initualCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initualCoursesState,
  on(CourseActions.allCoursesLoaded,
      (state, action) => adapter.addAll(action.courses, state) )
)
