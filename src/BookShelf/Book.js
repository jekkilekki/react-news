import React from 'react'
import './Book.css'

const Book = (props) => (
  <div 
    className={props.card.animation}
    onClick={() => props.clickCard(props.card)}
    >
    <img className="book-image" src={props.card.imageLinks.thumbnail} alt="A book I read once" />
    <div className="container">
      <h3>{props.card.title} <span className="price">$24.99</span></h3>
      <p>{props.card.description}</p>
    </div>
  </div>
)

export default Book