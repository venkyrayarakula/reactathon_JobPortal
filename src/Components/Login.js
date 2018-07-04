import React from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withApollo } from 'react-apollo';


 const FETCHUSER = gql`
      query getCandidateById ($id: ID!) {

        getCandidate(id: $id) {
        id
        email
        firstName
        lastName
        }

    }`;

  const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };

    const loginWasClickedCallback = (data) => {
       var id = data.username;
       props.client.query({
       query: FETCHUSER,
       variables: { id: id }
      }).then((res) => {       
         sessionStorage.setItem("loggedInUser",JSON.stringify(res.data.getCandidate));
         console.log(JSON.parse(sessionStorage.getItem("loggedInUser")));
       });
      alert('Login callback, see log on the console to see the data.');
    };

    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
      <div>
          <ReactSignupLoginComponent            
              title=""
              handleSignup={signupWasClickedCallback}
              handleLogin={loginWasClickedCallback}
              handleRecoverPassword={recoverPasswordWasClickedCallback}
          />
      </div>
    );
};
export default withApollo(LoginPage);