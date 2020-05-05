import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Link to="/" className={this.props.location.pathname === '/' ? "btn btn-link" : "btn-link-dark"}>Home</Link>
          <Link to="/projects" className={this.props.location.pathname === '/' ? "btn btn-link" : "btn-link-dark"}>Projects</Link>
        </section>
        <section className="navbar-center">
          <Link to="/" className={this.props.location.pathname === '/' ? "logo" : "logo dark"}>LMH</Link>
        </section>
        <section className="navbar-section">
          <Link to="/about" className={this.props.location.pathname === '/' ? "btn btn-link" : "btn-link-dark"}>About me</Link>
          <a href="mailto:lucyoliviamorganhobbs@gmail.com" className={this.props.location.pathname === '/' ? "contact-btn" : "contact-btn-dark"}>Contact</a>
        </section>
      </header>
    )
  }
}

export default withRouter(NavBar);