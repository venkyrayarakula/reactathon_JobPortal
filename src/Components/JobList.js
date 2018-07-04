import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {withRouter} from 'react-router-dom';

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

function JobList(props) {
  const jobs = props.data.listJobPostings.items;

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
          {jobs.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.id}
                </TableCell>
                <TableCell >{n.title}</TableCell>
                <TableCell >{n.desc}</TableCell>
                 <TableCell >{n.postDate}</TableCell>
                <TableCell ><NavLink to="/profile">Apply</NavLink></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default graphql(JOBLIST_QUERY) (JobList)


