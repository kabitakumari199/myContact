import React from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {
  constructor(props){
    super(props);
  }
 render() {

    const logout = localStorage.removeItem('user-token');

    if(!logout){
      return <Redirect to='/' />
     }

	return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 text-center">
                
                <p className="text-center my-4">
                <h1> Thank you, logout Successfully! </h1>            
                </p>
            </div>
        </div>
    </div>
	);
	}
}
export default Logout;