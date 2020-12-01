import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Wrapper, IconWrapper } from './UserIndex.styles';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    id: 'id',
    label: 'ID',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'jobs_count',
    label: 'Jobs Count',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'active',
    label: 'Active',
    minWidth: 100,
    align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function UserIndex() {
  const [users, setUsers] = useState([
    {
      id: 'loading...',
      email: 'loading...',
      first_name: 'loading...',
      last_name: 'loading...',
      jobs_count: 0,
      active: false,
      slack_username: '',
    },
  ]);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const history = useHistory();
  const handleEdit = (id: string) => {
    history.push(`/user/${id}`);
  };

  const handleDelete = (id: string) => {
    window.alert('click');
  };

  useEffect(() => {
    fetch('/api/v2/users')
      .then((res) => res.json())
      .then((json) => {
        console.log(json.users);
        setUsers(json.users);
      });
  }, []);

  return (
    <Wrapper>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(
                  (column: { id: string; label: string; minWidth: number; align: any }) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map(
                      (column: { id: string; label: string; minWidth: number; align: any }) => {
                        let value = row[column.id].toString();
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      }
                    )}
                    <TableCell>
                      <IconWrapper>
                        <MdEdit onClick={() => handleEdit(row.id)} />
                      </IconWrapper>
                    </TableCell>
                    <TableCell>
                      <IconWrapper>
                        <RiDeleteBin6Line onClick={() => handleDelete(row.id)} />
                      </IconWrapper>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>
    </Wrapper>
  );
}
