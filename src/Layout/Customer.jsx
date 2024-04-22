import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { createSvgIcon } from '@mui/material/utils';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import TextField from "@mui/material/TextField";
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

const columns = [
  { id: '_id', label: 'ID', minWidth: 170 },
  { id: 'first_name', label: 'First Name', minWidth: 100 },
  { id: 'last_name', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'industry_type', label: 'Industry Type', minWidth: 170 },
  { id: 'account_status', label: 'Account Status', minWidth: 170 },
  { id: 'customer_type', label: 'Customer Type', minWidth: 170 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },
];

export const Customer = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleClickOpen = (customerId) => {
    setSelectedCustomerId(customerId);
    // setOpen(true)
  };

  const handleClose = () => {
    // setOpen(false);
    setSelectedCustomerId(null);

  };

  const handleEditCustomer = (row) => {
    console.log(row._id, "hjkkhjj");
    navigate(`/edit/${row.user._id}`, { state: row })
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);


  const [nextcustomer, setnextCustomer] = useState();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchCustomers();
  }, [page, rowsPerPage]);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'x-sh-auth': token,
      };

      const response = await axios.post(
        `http://146.190.164.174:4000/api/customer/get_customers?page=${page}&limit=${rowsPerPage}`, {},
        { headers: headers }
      );

      setnextCustomer(response.data.count)
      console.log('Fetched customers:', response.data);

      if (response.data && response.data.customer) {
        setCustomers(response.data.customer.map((customer, index) => ({
          ...customer,
          id: page * rowsPerPage + index + 1, // Generate sequential IDs
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          industryType: '', // Reset industryType state
          customerType: ''
        })));
      } else {
        console.error('Invalid response format:', response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching customers:', error.response);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://146.190.164.174:4000/api/customer/delete_customer/${id}`, {
        headers: {
          'x-sh-auth': localStorage.getItem('token')
        }
      });
      if (response.status === 200) {
        console.log("Customer deleted:", id);
        fetchCustomers();
      }

    } catch (error) {
      console.error("Error deleting customer:", error.response);
    }
  };

  const SearchBar = ({ setSearchQuery }) => (
    <form>
      <TextField
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search Customer..."
        size="small"
      />
    </form>
  );

  return (
    <div style={{ marginTop: -80 }}>
      <div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='mt-5'>
          <Link to='/addcustomer'>
            <Button variant="contained" className='btn' startIcon={<AddIcon />}>
              Add Customer
            </Button>
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='mt-3'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div
            className="text"
            style={{
              justifyContent: "normal",
              fontSize: '10px',
              color: "white",
            }}
          />
        </div>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <CircularProgress />
                </div>
              ) : (
                <TableBody>
                  {customers.map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === '_id' ? row.id : column.id === 'email' ? row.user.email : row[column.id]}
                            </TableCell>
                          );

                        })}
                        <TableCell>
                          <React.Fragment>
                            <Button variant="outlined" onClick={() => handleClickOpen(row._id)}>
                              <DeleteIcon />
                            </Button>
                            <Dialog
                              fullScreen={fullScreen}
                              open={selectedCustomerId === row._id}
                              onClose={handleClose}
                              aria-labelledby="responsive-dialog-title"
                            >
                              <DialogTitle id="responsive-dialog-title">
                                {' Are you sure want to delete this customer'}
                              </DialogTitle>
                              <DialogContent>

                              </DialogContent>
                              <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                  Cancel
                                </Button>
                                <Button onClick={() => {
                                  handleDelete(row.user._id);
                                  handleClose(); // Close the dialog box
                                }}>Delete</Button>
                              </DialogActions>
                            </Dialog>
                          </React.Fragment>
                          <Button onClick={() => handleEditCustomer(row)}> <EditIcon /></Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[1, 2, 3, 5, 10]}
            component="div"
            count={customers.length ? nextcustomer : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

      </div>
    </div>
  );
};