import React, { Component } from 'react'
import axios from 'axios'
import { Select, MenuItem,InputLabel  } from '@material-ui/core'

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        };
      }
    
      componentDidMount() {
        
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
        .then(response => {this.setState(
            {isLoaded: true});
            const details = response.data;
            this.setState( {items: details});
            this.setState({isLoaded:false})
        }).catch(err => console.log('err',err))
        

        // fetch( 'https://jsonplaceholder.typicode.com/users' )
        // .then( response => response.json())
        // .then(result => this.setState({
        //     isLoaded: true,
        //     items: result,
        // }))
        
         }
        
        
    

    render() {
        let {isLoaded, items} = this.state;
    
        
        
        if(isLoaded) {
            return (
                <div> Loading... </div>
            )
        } else {

            return (
                <div>
                    <div>
                        <InputLabel> Name </InputLabel>
                            <Select>
                                {items && items.map(item => 
                                <MenuItem
                                        key={item.id} value={item}> {item.name}
                                </MenuItem > )
                                }
                                
                            </Select>
                            
                    </div>
                    
                </div>
             )
        }
    }
}

export default Dropdown