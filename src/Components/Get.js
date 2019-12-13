import React, {Component} from 'react'
import axios from 'axios'

export class Get extends Component {
    constructor (props){
        super(props) 
            this.state = {
                posts: [],
                errormsg :''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (response => {
            console.log(response);
            this.setState ({posts:response.data})
        })
        .catch( error => {
            console.log(error);
            this.setState({errormsg: 'Data not received'})
        })
    }

    render () {
        const {posts,errormsg } = this.state
        return (
            <div> List of titles 
                {
                    posts.length ? 
                    posts.map (post => <div key = {post.id}>{post.title}</div> ) :null
                }
                {
                    errormsg ? <div>{errormsg} </div> : null
                }
            </div>
        )
    }

}



export default Get