import React from 'react';
import logo from '../images/logo.png';
import {Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
 } from 'reactstrap';
  
   class Header extends React.Component {
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
          <Navbar color="light" light expand="md">
          <Link to="/" > <img src={logo} width="100px" height="auto" alt="bobsbrand"/></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <Link to="/shop">Shop</Link>
                </NavItem>
                <NavItem>
                <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                </NavItem>
                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  

  export default Header;