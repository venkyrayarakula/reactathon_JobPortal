import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import EmailInputField from '@mitchallen/react-email-input-field';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserProfile extends Component {
	state = {
    FirstName: '',
    LastName: '',
    Email: ''
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return (
     <MuiThemeProvider>
      <form style={{ margin: '25px'}} noValidate autoComplete="off">
      <div>
        <TextField
          id="fname"
          label="First Name"
          value={this.state.FirstName}
          onChange={this.handleChange('FirstName')}
        />
        </div>
        <div>
        <TextField
          id="lname"
          label="Last Name"
          value={this.state.LastName}
          onChange={this.handleChange('LastName')}
        />
        </div>        
        <EmailInputField/>
        </form>
        </MuiThemeProvider>

    );
  }
}

export default UserProfile;
