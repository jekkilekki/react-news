import React from 'react'
import LazyLoad from 'react-lazyload'
import './Book.css'

const Book = (props) => (
  <LazyLoad height={650} offset={-100}>
    <div className="book card">
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img className="book-image" src={props.card.imageLinks.thumbnail} alt="A book I read once" />
        <div className="container">
          <h3>{props.card.title} <span className="price">$24.99</span></h3>
        </div>
      </div>
      <div className="back" onClick={() => props.showFront(props.card)}>
        <div className="container-back">
          <p>{props.card.description}</p>
        </div>
      </div>
    </div>
  </LazyLoad>
)

export default Book