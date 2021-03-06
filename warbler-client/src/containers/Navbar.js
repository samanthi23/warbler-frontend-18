import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import Logo
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
        { /* insert another header with navbar-header */ }
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
             { /* insert logo here after importing it*/}
              <img src={Logo} alt="Warbler Home" />
            </Link>
            
          { /* line up horizontally signup and signin */ }
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
