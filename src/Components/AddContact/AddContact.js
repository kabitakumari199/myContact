import React from 'react';
import Header from '../Header/Header';

//https://jsfiddle.net/mayankshukla5031/ezdxg224/
//https://dev.to/fuchodeveloper/dynamic-form-fields-in-react-1h6c main important
//https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c
//https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c
class AddContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                contact_no: '',
                email: '',
                profile_pic:'',
                contact_type: ''
            },
            submitted: false
        };
    }

    handleChange=(event)=> {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit=(event)=> {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.contact_no && user.email && user.profile_pic && user.contact_type) {
          //  this.props.register(user);
 
        }
    }

    componentDidMount(){
        const loggingIn = localStorage.getItem('user-token');
        if(!loggingIn){
          this.props.history.push("/");
        }
    }
 
    render() {
        const { addingContact  } = this.props;
        const { user, submitted } = this.state;
        return (
            <>
            <Header />
                <div className="container">
                    <div className="col-md-6 col-md-offset-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.contact_no ? ' has-error' : '')}>
                            <label htmlFor="contact_no">Contact Number</label>
                            <input type="text" className="form-control" name="contact_no" value={user.contact_no} onChange={this.handleChange} />
                            {submitted && !user.contact_no &&
                                <div className="help-block">Contact Number is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                            {submitted && !user.email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.profile_pic ? ' has-error' : '')}>
                            <label htmlFor="profile_pic">Profile image</label>
                            <input type="file" className="form-control" name="profile_pic" value={user.profile_pic} onChange={this.handleChange} />
                            {submitted && !user.profile_pic &&
                                <div className="help-block">Profile image is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.contact_type ? ' has-error' : '')}>
                            <label htmlFor="contact_type">Contact type</label>
                            <select className="form-control" name="contact_type" onChange={this.handleChange}>
                            <option value="">Select Contact Type</option>
                                <option value="family">Family</option>
                                <option value="professional">Professional</option>
                                <option value="friend">Friend</option>
                            </select>
                            {submitted && !user.contact_type &&
                                <div className="help-block">Contact type is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Add Contact</button>
                            {addingContact && 
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }

                        </div>
                    </form>
                    </div>
                </div>

            
            </>
        );
    }
}

export default AddContact;