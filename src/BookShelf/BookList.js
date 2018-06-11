import React from 'react'
import Book from './Book'
import Loading from '../components/Loading'

const BookList = (props) => {

  return (
    <div className="Grid animated bounceInUp">
      {
        props.books.map((book) => (
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

export default BookList