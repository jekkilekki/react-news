import React, { Component } from 'react'
import Book from './Book'
import Loading from '../components/Loading'
import * as BooksAPI from './BooksAPI'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      books: [],
      booksAnimations: []
    }
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
  }

  showBack(card) {
    let books = this.state.booksAnimations
    books[card.id].animation = 'book card card-flip'
    console.log("Flip to back", card)

    // this.setState({
    //   cards,
    // })
  }

  showFront(card) {
    // let cards = this.state.books
    // cards[card.id].animation = 'book card'
    console.log("Flip to front", card)

    // this.setState({
    //   cards,
    // })
  }

  render() {
    return (
      <div className="Grid animated bounceInUp">
        {
          this.state.loading ? <Loading /> :
          this.state.books.map((book) => (
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
    )
  }
}

export default BookList