import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('CourseReducer', () => {
  it('should create course when dispatch CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];
    const newCourse = { title: 'C' };
    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
  });

  it('should update the course when dispatch UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 'id-A', title: 'A' },
      { id: 'id-B', title: 'B' }
    ];
    const newCourse = { id: 'id-B', title: 'new B' };
    const action = actions.updateCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('new B');
  });
});