import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      body: 'All rights reserved',
      footer: 'footer. all rights reserverd'
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({title});
  }

  changeBody(body) {
    this.setState({body});
  }

  render() {
    return (
      <div style={{ 'marginLeft': '20px' }}>
        <Header changeTitle={ this.changeTitle } title={ this.state.title } />
        <br/>
        <br/>
        <Body changeBody={ (e) => this.changeBody(e) }  title={ this.state.body}/>
        <br/>
        <br/>
        <Footer title={ this.state.footer }/>
      </div>
    );
  }
}

export default Layout;
