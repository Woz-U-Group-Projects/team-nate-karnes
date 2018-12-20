import React from 'react';
import {
  Navbar,
  NavbarBrand,
  } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="NavBarStyle">
          <NavbarBrand className="NavBarBrandStyle" href="/"><h2>line.up</h2></NavbarBrand>
          <img width='45' src='/images/calendar1.png' alt='calendar1'></img>
          {}
        </Navbar>
      </div>
    );
  }
}