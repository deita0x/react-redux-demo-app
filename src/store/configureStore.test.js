import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Integration test', () => {
  describe('Store', () => {
    it('should handle creating courses', () => {
      const store = createStore(rootReducer, initialState);
      const course = { title: 'Clean Code' }, expectedCourse = course;
      const action = courseActions.createCourseSuccess(course);
      let actualCourse;

      store.dispatch(action);

      actualCourse = store.getState().courses[0];
      expect(course).toEqual(expectedCourse);
    });
  });

});