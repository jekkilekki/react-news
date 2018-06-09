import React, { Component } from 'react'
import NewSingle from './NewSingle'
import * as BooksAPI from '../BooksAPI'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=018fd1ac0cdb46f38cb4fe5633ca5142'

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error))
    }

    renderNews() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ))
    }

    render() {
        return (
            <ul>
                {this.renderNews()}
            </ul>
        )
    }
}

export default News