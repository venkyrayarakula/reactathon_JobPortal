import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//import { withApollo } from 'react-apollo';

import { graphql } from "react-apollo";

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import gql from "graphql-tag";
import { Query } from "react-apollo";

const JOBLIST_QUERY = gql`
query listJobPostings  {

   listJobPostings {
    items {
      id
      title
      desc
      postDate
    }
  }
}`;
var jobs = {};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },

});
const updateSelectedJob = (selected_job) => {
    console.log(selected_job);
    sessionStorage.setItem("selected_job", JSON.stringify(selected_job));
}
const JobList = ({ user }) => (
  <Query query={JOBLIST_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
       <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Interview Date</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.listJobPostings.items.map((n,index) => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.id}
                </TableCell>
                <TableCell >{n.title}</TableCell>
                <TableCell >{n.desc}</TableCell>
                 <TableCell >{n.postDate}</TableCell>
                <TableCell ><NavLink onClick={updateSelectedJob(data.listJobPostings.items[index])} to="/apply">Apply</NavLink></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
      );
    }}
  </Query>
);

export default JobList;

