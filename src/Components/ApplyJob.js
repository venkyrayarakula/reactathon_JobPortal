import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import EmailInputField from '@mitchallen/react-email-input-field';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import gql from "graphql-tag";
import {Mutation} from "react-apollo";

import { withApollo } from 'react-apollo';



class ApplyJob extends Component {
	state = {
    candidate_id: '',
    job_id: '',
    status: 'Pending',
    hiringTeam:'',
    id:'',
    schDate:'Not Defined',
    schTime:'Not Defined'
        
  };
constructor(props) {
    super(props);
    this.props  = props;
}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  job = {};

 createSchedule = gql`
mutation createScheduleDetails($id: ID!, $candidate_id: ID!, $job_id: ID!, $schDate: String!, $schTime:String!, $hiringTeam: String!, $status: String!) {
  createScheduleDetails(
    input: {
    
      id: $id
candidate_id: $candidate_id
job_id: $job_id
schDate: $schDate
schTime: $schTime
status: $status
hiringTeam: $hiringTeam
    
    }
  ) {
    __typename
    id
    
    candidate_id
    job_id
    schDate
    schTime
    hiringTeam
    status
  }
}`;

  

applyJob = () =>{
    
      
       this.props.client.mutate({
       mutation: this.createSchedule,
       variables: { "id":  this.state.id,
"candidate_id":  this.state.candidate_id,
"job_id": this.state.job_id,
  "schDate": "Not Defined",
  "schTime": "Not Defined",
  
"status": "Pending",
  "hiringTeam": "HR@gmail.com" }
      }).then((res) => {       
         alert("Successful");
           console.log(res);
         
       });
     
    
}
  loadProfile = () => {
    var user = JSON.parse(sessionStorage.getItem("loggedInUser"));
       this.job = JSON.parse(sessionStorage.getItem("selected_job"));
      
      
    if(user) {
      
      this.state.candidate_id = user.id;
        this.state.job_id = this.job.id;
        
        this.id = this.state.candidate_id + ""+ this.state.job_id;
        return true;    
    }
      else
          
      return false;
     

  }
  render() {
      if(!this.loadProfile()) {
          alert("Please Login to continue");
          return (<div>
                  </div>
                 );
                  }
                  
        else {
    
    return (
  

<Mutation mutation={this.createSchedule}>
      {(createScheduleDetails, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createScheduleDetails({ variables: {"id":  this.state.id,
"candidate_id":  this.state.candidate_id,
"job_id": this.state.job_id,
  "schDate": "Not Defined",
  "schTime": "Not Defined",
  
"status": "Pending",
  "hiringTeam": "HR@gmail.com" } });
              
            }}
          >
           
            <button type="submit">Apply</button>
          </form>
        </div>
      )}
    </Mutation>
        

    );
  }

}
}

export default withApollo(ApplyJob);

