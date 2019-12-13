import React, {Component} from 'react';

class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: '',
        errormessage: ''
      };
    }
    
    submitChange =(event) => {
        event.preventDefault();
          }
    

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err, err1 = '';

      if(nam === 'age') {
          if ( val !== "" && !Number(val)) {
              err = <strong> Your age should be a number</strong> ;
            }
      
        this.setState({errormessage: err});
         this.setState({[nam]: val});
    }
    else if(nam === 'partnerage') {
        if ( val !== "" && !Number(val)) {
            err1 = <strong> Your partner age  should be a number</strong> ;
          }
    
      this.setState({errormessage: err1});
       this.setState({[nam]: val});
  }
}
  


    render() {
      return (
        <form onSubmit= {this.submitChange}>
        <h1>Hello {this.state.username} {this.state.age} and your {this.state.partnername}  {this.state.partnerage}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler} 
        />
         <p>Enter your partner name:</p>
        <input
          type='text'
          name='partnername'
          onChange={this.myChangeHandler}
          />
        <p>Enter your partner age:</p>
        <input
          type='text'
          name='partnerage'
          onChange={this.myChangeHandler}
          />
        
        <br/>
      <br/>
      <input type='submit' />
        
      
      {this.state.errormessage}
      
      </form>

      );
    }
  }

export default MyForm