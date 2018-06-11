import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as BooksAPI from '../BookShelf/BooksAPI'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import News from '../News/News'
import SideNews from '../News/SideNews'
import Book from '../BookShelf/Book'
import BookDetails from '../BookShelf/BookDetails'
import BookList from '../BookShelf/BookList'
import Vitamin from './Vitamin'
import Whoops404 from './Whoops404'
import Loading from './Loading'

/*
  https://reacttraining.com/react-router/web/example/auth-workflow
  - {history} - Keep track of where you've been (back button)
  - {location} - Where you are NOW - multiple keys, etc
  - {match} - Match specific things within a component (recursive example)
  - auth-workflow = Login/logout redirects
*/

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
      books: [],
      cards: [ 
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
    this.showBack = this.showBack.bind(this)
    this.showFront = this.showFront.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  getData() {
    BooksAPI.getAll().then((response) => {
        console.log("First response:", response)
        this.setState({
          books: response,
          loading: false
        })

        this.state.books.map((book) => {
          this.setState({
            booksAnimations: { id: book.id, animation: 'card' }
          })
        })
      })
      .then(() => {
        console.log("Book state:", this.state.books)
        console.log("Book animations", this.state.bookAnimations)
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getData()
    setTimeout(() => {
      this.setState({ loading: false })
      }, 3000)
  }

  showBack(card) {
    let cards = this.state.cards
    cards[card.id].animation = 'book card card-flip'
    console.log(cards)

    this.setState({
      cards,
    })
  }

  showFront(card) {
    let cards = this.state.cards
    cards[card.id].animation = 'book card'
    console.log(cards)

    this.setState({
      cards,
    })
  }

  openNav() {
    document.getElementById("overlayNav").style.width = "100%"
  }

  closeNav() {
    document.getElementById("overlayNav").style.width = "0%"
  }

  render() {
    return (
      <Router>
      <div className="App container-fluid">
        
        <Nav closeNav={this.closeNav} />

        <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/books" render={(props) => (
          <div className="Grid">
            <BookList books={this.state.books} />
          </div>
        )}/>

        <Route exact path="/book/:id" render={(props) => {
          let bookId = props.location.pathname.replace('/book/', '');
          console.log("Book Id", bookId)
          console.log("All books", this.state.books)
          return (
            <BookDetails book={this.state.books[bookId]} />
          )
        }}/>

        <Route exact path="/news" render={() => (
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

        <Route exact path="/cards" render={(props) => (
          <div className="Grid">
            {
              props.loading ? <Loading /> : 
              props.cards.map((book) => (
                <Book 
                  duration={150} 
                  key={book.id} 
                  card={book} 
                  showBack={this.showBack} 
                  showFront={this.showFront} 
                />
              ))
            }
          </div>
        )}/>

        <Route exact path="/vitamin" component={Vitamin} />

        <Route component={Whoops404}/>

        </Switch>

      </div>
      </Router>
    )
  }
}

export default App
