import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            books: []
        }
    }

    componentDidMount() {
        this.setState({
            books: BooksAPI.getAll()
        })
        console.log(this.state.books)

        const url = 'https://reactnd-books-api.udacity.com/books'

        fetch(url, { headers: { 'Authorization': 'AaronKr' }})
        //     .then((response) => {
        //         return response.json()
        //     })
            .then((data) => {
                this.setState({
                    books: data.books
                })
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
            <ul>
                {/* {this.renderBooks()} */}
            </ul>
        )
    }
}

export default BookList