import React from 'react'
import axios from 'axios'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/posts')
            .then(responce => {
                const posts = responce.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <div key={index}>
                                {post.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
