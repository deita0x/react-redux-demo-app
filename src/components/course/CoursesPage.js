import React from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { course: { title: '' } };

    this.onTitleChnage = this.onTitleChnage.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChnage(event) {
    this.setState({ course: { title: event.target.value } });
  }

  onClickSave() {
    console.log(`Saving: ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add courses</h2>
        <input 
          type="text"
          onChange={this.onTitleChnage}
          value={this.state.course.title}
        />
        <input 
          type="submit" 
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

export default CoursesPage;