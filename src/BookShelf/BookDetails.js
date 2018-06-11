import React from 'react'

const BookDetails = (props) => {
  console.log("Book details", props)
  return (
    <div className="book card">
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img className="book-image" src={props.imageLinks.thumbnail} alt="A book I read once" />
        <div className="container">
          <h3>{props.title} <span className="price">$24.99</span></h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
 
export default BookDetails