import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        
            this.state = {isToggleOn: true, message: 'Hello'};
            this.clickhandler = this.clickhandler.bind(this);
    }
    
    clickhandler() {
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn,
        
        }))

    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}> Click me</button> */}
                {/* <button onClick={() =>this.clickhandler()}> Click me</button> */}
                <button onClick={this.clickhandler}> {this.state.isToggleOn ? 'Login' : 'Logoff'}</button>
            </div>
        )
    }
}

export default EventBind
