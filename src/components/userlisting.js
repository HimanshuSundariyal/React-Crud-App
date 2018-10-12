import React, { Component } from 'react';
class UserListing extends Component {
  render() {
    return (
              <table id="mytable" className="table table-bordred table-striped"> 
		<tbody>			 
			 <tr>
                   <th>First Name</th>
                    <th>Last Name</th>
                     <th>Email</th>
                     <th>Contact</th>
                      <th>Edit</th>
                       <th>Delete</th>
			  </tr>	   

		{this.props.userdate.map(item => (
			<tr key={item.id}>
				<td> { item.firstname } </td>
				<td> { item.lastname } </td>
				<td> { item.Email } </td>
				<td> { item.Phone } </td> 
		<td> 
		<p data-placement="top" data-toggle="tooltip" title="Edit">
		<button onClick ={() => this.props.onEdit(item.id)} className="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-pencil"></span></button></p>
		</td>
		<td>
		<p data-placement="top" data-toggle="tooltip" title="Delete">
		<button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p>
	</td> 
</tr>	
   ))}
    </tbody>
</table>
    );
  }
}
export default UserListing;