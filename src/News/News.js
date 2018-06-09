import React, { Component } from 'react'
import NewSingle from './NewSingle'
import Error from './Error'
// import * as BooksAPI from '../BooksAPI'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            error: false
        }
    }

    componentDidMount() {
        // const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=018fd1ac0cdb46f38cb4fe5633ca5142'
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=018fd1ac0cdb46f38cb4fe5633ca5142`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            })
    }

    renderNews() {
        if( !this.state.error ) {
            return this.state.news.map((item) => (
                <NewSingle key={item.url} item={item} />
            ))
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderNews()}
            </div>
        )
    }
}

export default News