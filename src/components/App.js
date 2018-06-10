import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import News from '../News/News'
import SideNews from '../News/SideNews'
import Book from '../BookShelf/Book'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      },
      books: [ {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}, ]
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <Nav />
        <Route exact path='/' render={() => (
          <div className="row">
            <div className="col s8">
              <News news={this.state.news1} />
              <News news={this.state.news2} />
            </div>
            <div className="col s4">
              <SideNews news={this.state.news3} />
            </div>
          </div>
        )}/>
        <Route path="/books" render={() => (
          <div className="Grid">
            {
              this.state.books.map((book) => (
                <Book duration={150} key={book.id} />
              ))
            }
          </div>
        )}/>
      </div>
    )
  }
}

export default App
