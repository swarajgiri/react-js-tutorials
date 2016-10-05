import React from "react";

class Form extends React.Component {
  handleNameChange(e) {
      this.props.changeName(e.target.value);
  }

  handleEmailChange(e) {
      this.props.changeName(e.target.value);
  }

  render() {
    return (
      <form name="registration">
        <div class="form-group">
          <label for="name">Name</label>
          <input value={this.props.name} onChange={ (e) => this.handleNameChange(e)} name="name" class="form-control" placeholder="Name"/>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input value={this.props.email} onChange={ (e) => this.handleEmailChange(e)} name="email" class="form-control" placeholder="Email"/>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  name : React.PropTypes.string,
  name : React.PropTypes.element.isRequired,
  email : React.PropTypes.string,
  email : React.PropTypes.element.isRequired
};

// Form.defaultProps = {
//   name : 'stranger',
//   email : 'stranger@things.com'
// };

export default Form;



