import React, { Component } from 'react';
import Userlistinglist from './components/userlisting';
import EditformModel from './components/editformmodel';
import AdduserListing from './components/adduserformmodel';
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
		showaddmodel:false,
		pageTitle: "UserListing",
		editindex:1
	}
	
	handelEdit = id => {
		this.setState({ showeditmodel:true, editindex:id });	
	}
	handelDelete = (arrayindex) => {
		
		if(this.state.userlisting.length >1)
		{
		var newupdatessate = [...this.state.userlisting];
	    newupdatessate = newupdatessate.filter((_, i) => i !== arrayindex)
		this.setState({ userlisting:newupdatessate});
		}
		else
		{
			alert("This is Last Element");
		}	
		}
	handelpopup = () => {
		this.setState({ showeditmodel:false })
		this.setState({ showaddmodel:false })
	}
	
	handelAddUser = () =>{
		this.setState({showaddmodel: true})
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
	
	
	handeladduserlisting = (e) =>{
		let firstname = document.getElementById('firstname').value;
		let lastname = document.getElementById('lastname').value;
		let email = document.getElementById('email').value;
		let contact = document.getElementById('contact').value;
		let arraylength = this.state.userlisting.length+1;
		let newuserdate =[{'id':arraylength,'firstname':firstname,'lastname':lastname, 'Email':email, 'Phone':contact}]
		var newupdatessate = [...this.state.userlisting];
		var newuserlisting =  [...newupdatessate, ...newuserdate];
		this.setState({ userlisting:newuserlisting, showaddmodel:false });
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
		
		<button onClick={this.handelAddUser}>Add User</button>
		
		
		{this.state.showeditmodel &&
		<EditformModel userdata={this.state.userlisting.filter(userlisting => userlisting.id == this.state.editindex)} closemodel={this.handelpopup} formsubmit={this.handeleditformsubmit}/>
		}


		{this.state.showaddmodel &&
		<AdduserListing closemodel={this.handelpopup} formsubmit={this.handeladduserlisting}/>
		}		
		
		</div>  
        </div>
	</div>
</div>
    );
  }
}
export default App;