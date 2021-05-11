import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/Register'
import Post from './Components/Post'
import AddPost from './Components/AddPost'
import pullForm from './Components/pullForm'
import LongPull from './Components/subscriber';
function App() {
  return (
    <Router>
   <Switch>
     <Route exact path='/' component={Login}></Route>
     <Route exact path='/register' component={Register}></Route>
     <Route exact path='/posts' component={Post}></Route>
     <Route exact path='/add-post' component={AddPost}></Route>
     <Route exact path='/msgs' component={pullForm}></Route>
     {/* <Route exact path='/msgs/subscriber' component={LongPull}></Route> */}
     {/* <Route exact path='/msgs' component={LongPull}></Route> */}
   </Switch>
    </Router>
    
  );
}

export default App;
