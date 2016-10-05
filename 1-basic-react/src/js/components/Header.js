import React from "react";

import Title from "./Header/Title";

class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
        <Title title={this.props.title} />
    );
  }
}

export default Header;