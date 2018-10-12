import React, { Component } from 'react';
import logo from './logo.svg';
import Userlistinglist from './components/userlisting';
import EditformModel from './components/editformmodel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	
	state ={
		userlisting:
		[
		{
		 id: 1,
		 firstname: "Himanshu",
		 lastname: "Sundariyal",
		 Email: "himanshu@gmail.com",
		 Phone: "9898989898"
		},
		{
		 id: 2,
		 firstname: "Gaurav",
		 lastname: "bhandari",
		 Email: "gaurav@gmail.com",
		 Phone: "9797979797"
		}
		],
		showeditmodel:false,
		pageTitle: "UserListing",
		editindex:1
	}
	
	handelEdit = id => {
		this.setState({ showeditmodel:true, editindex:id });	
	}
	handelDelete = () => {
		alert(0);
	}
	handelpopup = () => {
		this.setState({ showeditmodel:false })
	}
	handeleditformsubmit = (e) => {	
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let email = document.getElementById('email').value;
	let contact = document.getElementById('contact').value;
	let id = document.getElementById('user_id').value;
	var newupdatessate = [...this.state.userlisting];
	var index = newupdatessate.findIndex(i => i.id == id);
	newupdatessate[index]['firstname'] = firstname;
	newupdatessate[index]['lastname'] = lastname;
	newupdatessate[index]['Email'] = email;
	newupdatessate[index]['Phone'] = contact;
	this.setState({ userlisting:newupdatessate, showeditmodel:false });
	e.preventDefault();
	}

  render() {
    return (

<div className="container">
	<div className="row">
        <div className="col-md-8">
        <h4>{this.state.pageTitle}</h4>
        <div className="table-responsive">
		<Userlistinglist userdate={this.state.userlisting} onEdit={this.handelEdit} onDelete={this.handelDelete} />
		<div className="clearfix"></div>  
		{this.state.showeditmodel &&
		<EditformModel userdata={this.state.userlisting.filter(userlisting => userlisting.id == this.state.editindex)} closemodel={this.handelpopup} formsubmit={this.handeleditformsubmit}/>
		}
		</div>  
        </div>
	</div>
</div>
    );
  }
}
export default App;