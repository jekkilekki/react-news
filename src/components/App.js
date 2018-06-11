import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import News from '../News/News'
import SideNews from '../News/SideNews'
import Book from '../BookShelf/Book'
import BookList from '../BookShelf/BookList'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
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
      books: [ 
        {
          id:0,
          animation: 'book card'
        },
        {
          id:1,
          animation: 'book card'
        },
        {
          id:2,
          animation: 'book card'
        },
        {
          id:3,
          animation: 'book card'
        },
        {
          id:4,
          animation: 'book card'
        },
        {
          id:5,
          animation: 'book card'
        },
        {
          id:6,
          animation: 'book card'
        },
        {
          id:7,
          animation: 'book card'
        }, 
      ]
    }
    this.clickCard = this.clickCard.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }

  clickCard(card) {
    let cards = this.state.books
    cards[card.id].animation = 'book card animated zoomOut'
    console.log(cards)

    this.setState({
      cards,
    })
  }

  render() {
    return (
      <div className="App container-fluid">

        <Nav />

        <Route exact path="/" render={() => (
          <div className="Grid">
            <BookList />
          </div>
        )}/>

        <Route path="/news" render={() => (
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
              this.state.loading ? <Loading /> : 
              this.state.books.map((book) => (
                <Book duration={150} key={book.id} card={book} clickCard={this.clickCard} />
              ))
            }
          </div>
        )}/>

      </div>
    )
  }
}

export default App
