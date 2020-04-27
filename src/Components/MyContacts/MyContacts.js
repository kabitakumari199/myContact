import React from 'react';
import {withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import './table.css';
import * as contactsAction from '../../actions/contactAction';
import Pagination from "react-js-pagination";

class MyContacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page_num:'',
            activePage: 1,
        }
    }

    componentDidMount(){
        const loggingIn = localStorage.getItem('user-token');
        if(!loggingIn){
          this.props.history.push("/");
        }
        const {user_id} = 1;
        this.props.fetchContact();
        this.props.fetchTotal();
     }

     deletUser = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            this.props.deleteContact(id);
        }
       
     }

     editUser = (id) =>{
         alert('its in progress');
     }
     handlePageChange = (pageNumber) => {
         console.log('pagination',pageNumber);
         this.setState({activePage:pageNumber});
         const obj = {
            page_num:pageNumber,
            };
         const data = 10;
         this.props.filterContact(obj);

    }
 
    render() {
        const {contactList,totalCount} = this.props;
        const{isLoading}= this.state;

         return (
            <>
            <Header />
                <div className="container">
                    <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                        <div className="col-sm-5">
                            <h2>My <b>Contacts Listing</b></h2>
                        </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>						
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                             {contactList.length && contactList.map((user,index) => {
                                return(
                                    <tr>
                                   <td>{index == 0 ? 1 : index}</td>
                                   <td><a href="#"><img src="#" className="avatar" />{user.name}</a></td>  
                                    <td>{user.contact_no}</td>                     
                                    <td>{user.email_id}</td> 
                                    <td>{user.createdAt}</td>
                                    <td>
                                    <Link  className="icon_margin"><i className="fa fa-edit" aria-hidden="true" onClick={()=>this.editUser(user.id)}></i></Link>
                                    <Link to={"/edit/"+user.id} className="icon_margin"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                                    <Link className="icon_margin"><i className="fa fa-trash" aria-hidden="true" onClick={()=> this.deletUser(user.id)}></i></Link>
                                </td>
                                </tr>
                                );
                            })
                            }
                        </tbody>
                        </table>
                        <div className="clearfix">
                            <ul className="pagination">
                            <Pagination
                                hideDisabled
                                activePage={this.state.activePage}
                                itemsCountPerPage={5}
                                totalItemsCount={totalCount.length}
                                onChange={this.handlePageChange}
                            />
                            
                            </ul>
                        </div>
                        </div>
                </div>

            
            </>
        );
    }
}
const mapStateToProps = (state)=> {
    console.log('i am data',state);
    return {
        contactList:state.fechContactReducer.contacts,
        userinfo:state.loginReducer.currentUser,
        totalCount:state.fechContactReducer.totalCount
        
    };
  }
export default withRouter(connect(mapStateToProps, { ...contactsAction})(MyContacts));

