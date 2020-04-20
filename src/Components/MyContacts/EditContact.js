import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';

class EditContact extends React.Component {

    constructor(props) {
        super(props);
        this.state={
         userData:''
        }

    }

    componentDidMount(){
        const loggingIn = localStorage.getItem('user-token');
        if(!loggingIn){
          this.props.history.push("/");
        }
        console.log('id ksdkkdkdk ',this.props.match.params.id);
        axios.get('http://localhost:7000/api/user/viewContact/'+this.props.match.params.id)
          .then(response => {
              console.log('view',response);
              

              this.setState({ 
                userData: response.data, 
             });
          })
          .catch(function (error) {
              console.log(error);
          })
     }

 
    render() {
         const {userData} = this.state;
         return (
            <>
            <Header />

                <div className="container emp-profile">
                <form method="post">
                <div className="row">
                    <div className="col-md-4">
                    <div className="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="profile-head">
                        <h5>
                        Kshiti Ghelani 
                       <pre>{JSON.stringify(this.state.userData,null,2)}</pre>
                        </h5>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                        </li>

                        </ul>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="profile-work">
                        <p>WORK LINK</p>
                        <a href>Website Link</a><br />
                        <a href>Bootsnipp Profile</a><br />
                        <a href>Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href>Web Designer</a><br />
                        <a href>Web Developer</a><br />
                        <a href>WordPress</a><br />
                        <a href>WooCommerce</a><br />
                        <a href>PHP, .Net</a><br />
                    </div>
                    </div>
                    <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                    <div className="row">
                            <div className="col-md-6">
                            <label>User Id</label>
                            </div>
                            <div className="col-md-6">
                            <p>Kshiti123</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <label>Name</label>
                            </div>
                            <div className="col-md-6">
                            <p>{this.state.userData.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <label>Email</label>
                            </div>
                            <div className="col-md-6">
                            <p>kshitighelani@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                            <p>123 456 7890</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <label>Profession</label>
                            </div>
                            <div className="col-md-6">
                            <p>Web Developer and Designer</p>
                            </div>
                        </div>
                        </div>

                        </div>
                    </div>
                
                </form>           
            </div>
       
            </>
        );
    }
}

export default EditContact

