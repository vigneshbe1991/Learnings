import React, { Component } from 'react';
import axios from 'axios';
import { Select, MenuItem,InputLabel,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth:300
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const SelectDropdown = props => {
    const { user } = props;
    const classes = useStyles();
    const getUserDetails = event => {
        console.log('event',event.target.value)
    }

    
    return <FormControl>
    <InputLabel id="userId">User</InputLabel>
    <Select className={classes.formControl}
    labelId="userId"
    id="user-select"
    onChange={getUserDetails}
    >
        {user && user.map( eachUser => <MenuItem value={eachUser}>{eachUser.name}</MenuItem>)}
        </Select>
        </FormControl>

}

export default class CategoryChoose extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            persons:[],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({isLoading: true } , () => this.GetUserDetailsByApi())
            
    }
    GetUserDetailsByApi = () => {
        axios.get( 'https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const persons = response.data;
            this.setState({ persons,isLoading: false });
          }).catch( err => console.log('err',err));    
    }

    render() {
        const { isLoading, persons} = this.state;
        console.log('this.state',this.state);


        if(isLoading) {
            return (
                <div> Loading... </div>
            )
        }

        return (
            <div>
                <h2>CategoryChoose</h2>
              
                <SelectDropdown user={persons}/>
                
            </div>
        )
    }
}
