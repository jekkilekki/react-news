import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      toggleLogo: true
    }
    this.toggleLogo = this.toggleLogo.bind(this)
  }

  toggleLogo = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }))
  }

  render() {
    return (
      <div className="navbar-fixed main-navigation">
        <h1
          className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
          onClick={this.props.openNav}
        >Menu</h1>
        <nav className="nav-wrapper indigo lighten-4">
          <div className="brand-logo">
            <a href="/" className="bran-logo" onClick={() => this.props.openNav}>
              <img src="https://cdn.pixabay.com/photo/2016/01/23/16/02/book-1157658_960_720.png" 
                  className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'}
                  onMouseEnter={this.toggleLogo} 
                  onMouseLeave={this.toggleLogo}
              /> My React sites</a>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/vitamin">Vitamin</Link></li>
            <li><a href="" onClick={() => this.props.openNav()}>Menu</a></li>
          </ul>
        </nav>

        <div id="overlayNav" className="overlay">
          <a className="closebtn" onClick={() => this.props.closeNav()}>&times;</a>
          <div className="overlay-content">
            <Link to="/" onClick={() => this.props.closeNav()}>Home</Link>
            <Link to="/news" onClick={() => this.props.closeNav()}>News</Link>
            <Link to="/books" onClick={() => this.props.closeNav()}>Books</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav