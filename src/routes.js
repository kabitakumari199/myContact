import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import MyContacts from './Components/MyContacts/MyContacts';
import Logout from './Components/Logout/Logout';
import AddContact from './Components/AddContact/AddContact';
import EditContact from './Components/MyContacts/EditContact';

class Routing extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/mycontacts" component={MyContacts} />
					<Route exact path="/addContact" component={AddContact} />
					<Route path='/edit/:id' component={ EditContact } />
					<Route exact path="/logout" component={Logout} />
				</Switch>
			</Router>
		)
	}
}

export default Routing;
