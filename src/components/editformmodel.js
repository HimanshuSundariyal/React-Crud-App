import React, { Component } from 'react';
class EditformModel extends Component {
  render() {
	  const { userdata } = this.props;
    return (
	<div id="myModal"   role="dialog">
	  <div className="modal-dialog">
		<div className="modal-content">
		  <div className="modal-header">
		  <h4 className="modal-title">Edit User:</h4>
			<button onClick={this.props.closemodel} type="button" className="close" data-dismiss="modal">&times;</button>
		  </div>
		  <div className="modal-body">
			<form onSubmit={this.props.formsubmit}>
			  <div className="form-group">
				<label>First Name:</label>
				<input type="text" ref="firstname" className="form-control" id="firstname" value={userdata[0]['firstname']}/>
			  </div>
			  <div className="form-group">
				<label>Last Name:</label>
				<input type="text" className="form-control" id="lastname" value={userdata[0]['lastname']} />
			  </div>
			  <div className="form-group">
				<label>Email:</label>
				<input type="email" className="form-control" id="email" value={userdata[0]['Email']} />
			  </div>
			  <div className="form-group">
				<label>Contact:</label>
				<input type="text" className="form-control" id="contact" value={userdata[0]['Phone']} />
			  </div>	
			  <button type="submit" className="btn btn-default">Submit</button> 
			  
			</form>
		  </div>
		  <div className="modal-footer">
			<input type="hidden" name="user_id" id="user_id" value={userdata[0]['id']}/>
			<button onClick={this.props.closemodel} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	  </div>
	</div>
    );
  }
}
export default EditformModel;