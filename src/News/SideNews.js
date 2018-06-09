import React, { Component } from 'react'
import axios from 'axios'
import SideSingle from './SideSingle'
import Error from './Error'
// import * as BooksAPI from '../BooksAPI'


class SideNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidenews: [],
            error: false
        }
    }

    componentDidMount() {
        const reusableUrl = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=018fd1ac0cdb46f38cb4fe5633ca5142`

        // axios.post(url, {
        //     data: {
        //         news: {
        //             title: "something"
        //             description: "something something"
        //         }
        //     }
        // })

        axios.get(reusableUrl)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
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
            return this.state.sidenews.map((item) => (
                <SideSingle key={item.url} item={item} />
            ))
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div>
                {this.renderNews()}
            </div>
        )
    }
}

export default SideNews