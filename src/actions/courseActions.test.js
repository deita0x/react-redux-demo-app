import expect from 'expect';
import * as types from './actionTypes';
import *  as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CourseActions', () => {
  describe('Async actions', () => {
    afterEach(() => { nock.cleanAll(); });

    it('should dispatch LOAD_COURSES_SUCCESS when load courses', (done) => {
      const expectedAction = [
        { 
          type: types.LOAD_COURSES_SUCCESS,
          body: { courses: [{ id: 'clean-code', title: 'clean-code' }] }
        }
      ];

      const initialState = { courses: [] };
      const store = mockStore(initialState, expectedAction);

      store.dispatch(
        courseActions.loadCourses()
      ).then(() => {
          const actions = store.getActions();

          expect(actions[0].type).toEqual('LOAD_COURSES_SUCCESS');
          expect(actions[0].courses.length).toBeGreaterThan(0);
          done();
        });
    });
  });
});