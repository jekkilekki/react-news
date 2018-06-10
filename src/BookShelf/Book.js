import React from 'react'
import './Book.css'

const Book = () => (
  <div className="book card">
    <img src="https://www.neondystopia.com/wp-content/uploads/2017/07/the-punch-escrow-683x1024.jpeg" alt="A book I read once" className="card-image" />
    <div className="container">
      <h3>The Punch Escrow <span className="price">$24.99</span></h3>
      <p>A book about a man who accidentally gets copied while teleporting to another location on earth, and the consequences of that event.</p>
    </div>
  </div>
)

export default Book