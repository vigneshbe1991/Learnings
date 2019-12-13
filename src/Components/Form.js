import React, {Component} from 'react'

export class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            UserName: '',
            Comments:'',
            field: 'React'            
        }
    }
    
    handleOnchangeUserName = (event) =>{
        this.setState({
            UserName: event.target.value
        })
    }

    handleonChangeComments = (event) => {
        this.setState({
            Comments: event.target.value
        })
    }

    handleonchangeField = (event) => {
        this.setState({
            field: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert("you are going to submit "+ this.state.UserName);
        event.preventDefault();
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
            <input type='text' value = {UserName} onChange= {this.handleOnchangeUserName}/>  
            </div>

            <div> 
            <label>Age</label>
            <input type = 'text' value = {age} onChange = {this.handleAgeChange}/>
            </div>

            <div> 
            <label>Comments</label>
            <textarea type='text' value={Comments} onChange= {this.handleonChangeComments}/>
            </div>

            <div>
            <lable> Field </lable>
            <select value = {field} onChange={this.handleonchangeField}>
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

export default Form