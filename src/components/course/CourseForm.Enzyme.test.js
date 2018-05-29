import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving = true) {
  let props = {
    course: {},
    allAuthors: [],
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via enzyme', () => {
  it('render form', () => {
    const wrapper = setup();

    expect(
      wrapper.find('form').length
    ).toBe(1);
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);

    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup();

    expect(wrapper.find('input').props().value);
  });
});