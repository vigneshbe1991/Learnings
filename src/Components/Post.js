import React, {Component} from 'react'
import axios from 'axios'

export class Post extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            UserName: '',
            Comments:'',
            field: 'React'            
        }
    }

    
    handleOnchange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    handleSubmit = (event) => {
        alert("you are going to submit "+ this.state.UserName);
        event.preventDefault();
        axios
        .post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=> {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

        console.log('ch',this.state);
        
     }

    render(){
        const {UserName,Comments,field,age} = this.state;
        let popup = '';
        
        if (UserName){
            popup = <h1>Hello {UserName}! Welcome</h1>;
        }
        else {
            popup ='';
        }
        return (
            <form onSubmit={this.handleSubmit}>
            <div> {popup} </div>
            <div>
            <label> UserName</label>
            <input name = 'UserName' type='text' value = {UserName} onChange= {this.handleOnchange}/>  
            </div>

            <div> 
            <label>Age</label>
            <input name = 'Age' type = 'text' value = {age} onChange = {this.handleOnchange}/>
            </div>

            <div> 
            <label>Comments</label>
            <textarea name ='Comments' type='text' value={Comments} onChange= {this.handleOnchange}/>
            </div>

            <div>
            <lable> Field </lable>
            <select name = 'field' value = {field} onChange={this.handleOnchange}>
            <option value = 'React'> React </option>
            <option value = 'JavaScript'> JavaScript </option>
            <option value = 'Angular'> Angular</option>
            <option value = 'Vue'> Vue</option>
            </select>
            </div>

            <button type='submit'>Submit</button>
            
            </form>
        )
    }
}

export default Post