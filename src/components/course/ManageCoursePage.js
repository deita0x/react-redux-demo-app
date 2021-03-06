import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

// login placed in selectors
import { getAuthorsFormatted } from '../../selectors/manageCoursePageSelectors';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);

    course[field] = event.target.value;

    return this.setState({ course });
  }

  formIsInvalid() {
    let formIsInvalid = false;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 charcters.';
      formIsInvalid = true;
    }

    this.setState({ errors: errors });

    return formIsInvalid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (this.formIsInvalid()) { return; }

    this.setState({ saving: true });
    this.props.actions
      .saveCourse(this.state.course)
      .then(() => {
        this.setState({ saving: false });
        toastr.success('Course saved.');
        this.context.router.push('/courses');
      })
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          onSave={this.saveCourse}
          onChange={this.updateCourseState}
          saving={this.state.saving}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, courseId) {
  let course = courses.filter(course => course.id === courseId);

  if (course.length) { return course[0]; }
  return {};
}

function mapStateToProps(state, ownProps) {
  let course;
  const courseId = ownProps.params.id;

  if (courseId) {
    course = getCourseById(state.courses, courseId);
  } else {
    course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  }

  return { course: course, authors: getAuthorsFormatted(state.authors) };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);