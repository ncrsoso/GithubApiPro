// import axios from 'axios';
// import React, { Component } from 'react';
// import User from './User' ;   

// class UserItem extends Component {

//     state = {
//         User : {}
//     }

//     componentWillUnmount (){

//        const login = this.props.match.params.login;

//        axios.get(`https://api.github.com/users/${login}`)
//        .then( res => {
//            this.setState({
//                user : res.data
//            })

//        } )
//     }

//     render() { 
//         const {user} = this.state; 
//         return (
//             <div>
//         <User user = {user} /> 
//             </div>
//         )
//     }
// }
// export default UserItem;