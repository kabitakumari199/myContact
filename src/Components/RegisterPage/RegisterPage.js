import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as RegisterAction from '../../actions/registerAction';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            loggingIn:false,
            submitted: false
           }

         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
        fields
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        console.log(this.validateForm());
        console.log('is_form submitted',this.state.fields);
        if (this.validateForm()) {
              const {firstName,contact_no,username,email,password} = this.state.fields;
              const user = {
              first_name:firstName,
              contact_no:contact_no,
              username:username,
              email:email,
              password:password,
              status:"0"
            }
            this.props.register(user);

        }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*First Name is required";
          }

        if (!fields["contact_no"]) {
             formIsValid = false;
            errors["contact_no"] = "*Contact Number is required";
          }

          if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Username is required";
          }

        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Email is required.";
        }
    
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
    
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
    
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
        if (!fields["confirmpwd"]) {
            formIsValid = false;
            errors["confirmpwd"] = "*Confirm password is required.";
        }
        else if(fields["password"]!==fields["confirmpwd"]){
            formIsValid = false;
            errors["confirmpwd"] = "*Password is not matched.";
        }
         
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
      }

    render() {
        const { registering,loggedIn,error} = this.props;
        const { submitted } = this.state;
        if(loggedIn){
          this.props.history.push("/mycontacts");
       }
        return (
            <div className="jumbotron">
            <div className="container">
            <div className="col-md-6 col-md-offset-3">
             {error && ( <div className="alert alert-danger" role="alert">{this.props.error}</div> ) }
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !this.state.fields.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
                        {submitted && !this.state.fields.firstName &&
                            <div className="help-block"><div className="help-block">{this.state.errors.firstName}</div></div>
                        }
                            
                    </div>
                    <div className={'form-group' + (submitted && !this.state.fields.contact_no ? ' has-error' : '')}>
                        <label htmlFor="number">Contact Number</label>
                        <input type="number" className="form-control" name="contact_no" value={this.state.fields.contact_no} onChange={this.handleChange} />
                            {submitted && !this.state.fields.contact_no &&
                                <div className="help-block"><div className="help-block">{this.state.errors.contact_no}</div></div>
                            }
                     </div>
                    <div className={'form-group' + (submitted && !this.state.fields.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                             {submitted && !this.state.fields.username &&
                               <div className="help-block">{this.state.errors.username}</div>
                            }
                    </div>
                    <div className={'form-group' + (submitted && !this.state.fields.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                        
                            <div className="help-block" style={{color:"#a94442"}}>{this.state.errors.email}</div>
                       
                    </div>
                    <div className={'form-group' + (submitted && !this.state.fields.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            
                            <div className="help-block" style={{color:"#a94442"}}>{this.state.errors.password}</div>
                          
                       
                    </div>
                    <div className={'form-group' + (submitted && !this.state.fields.confirmpwd ? ' has-error' : '')}>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmpwd" value={this.state.fields.confirmpwd} onChange={this.handleChange} />
                       
                         <div className="help-block" style={{color:"#a94442"}}>{this.state.errors.confirmpwd}</div>
                       
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
  return {
      registering:state.registerReducer.registering,
      error:state.registerReducer.error,
      loggedIn:state.loginReducer.loggedIn,
      
  };
}
export default withRouter(connect(mapStateToProps, { ...RegisterAction})(RegisterPage));
