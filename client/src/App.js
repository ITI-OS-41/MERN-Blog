import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Post from "./Components/Post";
import AddPost from "./Components/AddPost";
import pullForm from "./Components/pullForm";
import profile from "./Components/profile";
// import dashboard from "./Components/Dashboard";
// * redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import LongPull from "./Components/subscriber";
import Dashboard from "./Components/Dashboard";
import setAuthToken from './token/setAuthToken';
import Navbar  from "./Components/Navbar";
import CreateProfile  from "./Components/create-profile";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route exact path="/register" component={Register}></Route>
					<Route exact path="/posts" component={Post}></Route>
					<Route exact path="/add-post" component={AddPost}></Route>
					<Route exact path="/msgs" component={pullForm}></Route>
					<Route exact path="/profile" component={profile}></Route>
					<Route exact path="/dashboard" component={Dashboard}></Route>
					<Route exact path="/create-profile" component={CreateProfile}></Route>

					{/* <Route exact path='/msgs/subscriber' component={LongPull}></Route> */}
					{/* <Route exact path='/msgs' component={LongPull}></Route> */}
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
