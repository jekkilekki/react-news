import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      toggleLogo: false
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
        <nav className="nav-wrapper indigo lighten-4">
          <div className="brand-logo">
            <a href="/" className="bran-logo">
              <img src="https://cdn.pixabay.com/photo/2016/01/23/16/02/book-1157658_960_720.png" 
                  className={!this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'}
                  onMouseEnter={this.toggleLogo} 
                  onMouseLeave={this.toggleLogo}
              /> My React sites</a>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav