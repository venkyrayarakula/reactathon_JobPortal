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

let id = 0;
function createData(JobId, desc, date) {
  id += 1;
  return { id, JobId, desc, date };
}

const data = [
  createData(123, 'java developer', '01/12/2018'),
  createData(123, 'java developer', '01/12/2018'),
  createData(123, 'java developer', '01/12/2018'),
  createData(123, 'java developer', '01/12/2018'),
  createData(123, 'java developer', '01/12/2018'),
];

function JobList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Interview Date</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.JobId}
                </TableCell>
                <TableCell >{n.desc}</TableCell>
                <TableCell >{n.date}</TableCell>
                <TableCell ><NavLink to="/profile">Apply</NavLink></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

JobList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobList);