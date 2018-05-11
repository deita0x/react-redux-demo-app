import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving = true) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onchange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  let output;

  renderer.render(<CourseForm {...props} />);
  output = renderer.getRenderOutput();

  return { props, output, renderer };
}

describe('CourseForm via react utils', () => {
  it('render form', () => {
    const { output } = setup();

    expect(output.type).toBe('form');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[4];

    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup();
    const submitButton = output.props.children[4];

    expect(submitButton.props.value).toBe('Saving...');
  });
});