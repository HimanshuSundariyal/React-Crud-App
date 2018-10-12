import React, { Component } from 'react';
class AdduserformModel extends Component {
  render() {
    return (
	<div id="adduserModel" role="dialog">
	  <div className="modal-dialog">
		<div className="modal-content">
		  <div className="modal-header">
		  <h4 className="modal-title">Add User </h4>
			<button onClick={this.props.closemodel} type="button" className="close" data-dismiss="modal">&times;</button>
		  </div>
		  <div className="modal-body">
			<form onSubmit={this.props.formsubmit}>
			  <div className="form-group">
				<label>First Name:</label>
				<input type="text" ref="firstname" className="form-control" id="firstname"/>
			  </div>
			  <div className="form-group">
				<label>Last Name:</label>
				<input type="text" className="form-control" id="lastname"/>
			  </div>
			  <div className="form-group">
				<label>Email:</label>
				<input type="email" className="form-control" id="email"/>
			  </div>
			  <div className="form-group">
				<label>Contact:</label>
				<input type="text" className="form-control" id="contact"/>
			  </div>	
			  <button type="submit" className="btn btn-default">Submit</button> 
			  
			</form>
		  </div>
		  <div className="modal-footer">
			<button onClick={this.props.closemodel} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
		</div>
	  </div>
	</div>
    );
  }
}
export default AdduserformModel;