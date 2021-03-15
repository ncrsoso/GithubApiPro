import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Searchusers from './Searchusers';

 class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Users: []
        }
    }
    
getUsers = () => {
axios.get('https://api.github.com/users')
.then (res => {
            this.setState({
                Users : res.data
            })
})
}

componentDidMount(){
    this.getUsers();
}
   UserSearchFromGit = (data) =>{
        if( data != ''){
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(res => {
                this.setState({
                    Users : res.data.items
                })
            } )
        }

    }


    render() {
        return (
            <div>
                <div className="row my-3">
                <div className="col-md-12">
                <Searchusers getUserSearch = {this.UserSearchFromGit} />
                </div>     
                </div>

                <div className="row">
               {this.state.Users.map(user =>(
                   <div className="col-md-4" key= {user.id} >
                    <User user = {user} />
                   </div>
               ) )} 
               </div>
            </div>
        )
    }
}
export default Users;