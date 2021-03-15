import React, { Component } from 'react';

class Searchusers extends Component {
    state = {
        search : ''
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }

searchusers = (e) => {
    e.preventDefault();
    this.props.getUserSearch(this.state.search);
    
}

    render() {
        const {search} = this.state;
        return (
            <form onSubmit= {this.searchusers} >
               <div className="form-group"> 
                <input onChange = {this.handleForm} value = {search} id="search" type="text" className="form-control" placeholder="search for users on github"/> 
               </div>
               {/*databyden retyping {search} */}
                <button className="btn btn-danger btn-block" > Search </button>
            </form>
        )
    }
}

export default Searchusers;
