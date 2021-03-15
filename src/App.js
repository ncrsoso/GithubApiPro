import './App.css';
import Users from './components/Users/Users';
import Navbar from './components/Layouts/Navbar';
import UserItem from './components/Users/UserItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
    <div className="container mt-2">
     
    < Users /> 

     </div>    
    </div>
 
  );
}

export default App;


{/* <switch>
    <Route path = "/Users" component= {Users} />
    <Route path = "/users/:login" component ={UserItem} />
    <Route  component = {Users} />

     <switch/> */}
