import React from 'react';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, [e.target.name]: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.course.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type='text' name='title' onChange={this.handleChange} value={this.state.course.title} />
        <input type='submit' value='Save' />
      </form>
    );
  }
}

export default CoursesPage;
