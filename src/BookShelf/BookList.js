import React, { Component } from 'react'
import Book from './Book'
import Loading from '../components/Loading'
import * as BooksAPI from './BooksAPI'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
        console.log("First response:", response)
        this.setState({
          books: response,
          loading: false
        })
      })
      .then(() => {
        console.log("Book state:", this.state.books)
      })
      .catch((error) => console.log(error))
  }

  renderBooks() {
    return this.state.books.map((book) => (
      <Book key={book.id} item={book} />
    ))
  }

  render() {
    return (
      <div className="Grid">
        {
          this.state.loading ? <Loading /> :
          this.state.books.map((book) => (
            <Book duration={150} key={book.id} card={book} />
          ))
        }
      </div>
    )
  }
}

export default BookList