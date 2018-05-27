import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('ManageCoursePage', () => {
  it('set error message when trying to save empty tittle', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => Promise.resolve() },
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input[type="submit"]');

    expect(saveButton.length).toBe(1);
    saveButton.simulate('click');

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 charcters.');
  });
});