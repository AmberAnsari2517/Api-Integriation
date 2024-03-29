
// import Avatar from '@mui/material/Avatar';
// import { deepPurple } from '@mui/material/colors';
// import { FormControl } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
// import DoDisturbIcon from '@mui/icons-material/DoDisturb';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TableBody from '@mui/material/TableBody';
// import TablePagination from '@mui/material/TablePagination';
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { createSvgIcon } from '@mui/material/utils';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import AddIcon from '@mui/icons-material/Add';
// import TextField from "@mui/material/TextField";
// import axios from 'axios';

// const PlusIcon = createSvgIcon(
//   // credit: plus icon from https://heroicons.com/
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//   </svg>,
//   'Plus',
// );
// // const columns = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'firstName', headerName: 'First name', width: 130 },
// //   { field: 'lastName', headerName: 'Last name', width: 130 },
// //   { field: 'email', headerName: 'Email', type: 'email', width: 90 },
// //   { field: 'accountStatus', headerName: 'Account status', type: 'string', width: 130 },
// //   { field: 'customerType', headerName: 'Customer Type', type: 'string', width: 130 },
// //   { field: 'industryType', headerName: 'Industry Type', type: 'string', width: 130 },
// //   { field: 'createdAt', headerName: 'CreatedAt', type: 'string', width: 150 },
// // ];

// const columns = [
//   { id: '_id', label: 'ID', minWidth: 170 },
//   { id: 'first_name', label: 'First Name', minWidth: 100 },
//   { id: 'last_name', label: 'Last Name', minWidth: 170 },
//   { id: 'email', label: 'Email', minWidth: 170 },
//   { id: 'industry_type', label: 'Industry Type', minWidth: 170 },
//   { id: 'account_status', label: 'Account Status', minWidth: 170 },
//   { id: 'customer_type', label: 'Customer Type', minWidth: 170 },
//   { id: 'createdAt', label: 'Created At', minWidth: 170 },
// ];

// export const Customer = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const headers = {
//         'x-sh-auth': token,
//       };

//       const response = await axios.post(
//         'http://146.190.164.174:4000/api/customer/get_customers',
//         {},
//         { headers: headers }
//       );

//       console.log('Fetched customers:', response.data);

//       if (response.data && response.data.customer) {
//         setCustomers(response.data.customer.map((customer, index) => ({
//           ...customer,
//           id: customer.id || index, firstName: '',
//           lastName: '',
//           email: '',
//           password: '',
//           industryType: '', // Reset industryType state
//           customerType: ''
//         })));
//       } else {
//         console.error('Invalid response format:', response.data);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching customers:', error.response);
//       setLoading(false);
//     }
//   };

//   const SearchBar = ({ setSearchQuery }) => (
//     <form>
//       <TextField
//         className="text"
//         onInput={(e) => {
//           setSearchQuery(e.target.value);
//         }}
//         placeholder="Search Customer..."
//         size="small"
//       />
//     </form>
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (customers.length === 0) {
//     return <div>No customers found.</div>;
//   }

//   return (
//     <div style={{ marginTop: -80 }}>
//       <div>
//         <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='mt-5'>
//           <Link to='/addcustomer'>
//             <Button variant="contained" className='btn' startIcon={<AddIcon />}>
//               Add Customer
//             </Button>
//           </Link>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='mt-3'>
//           <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//           <div
//             className="text"
//             style={{
//               justifyContent: "normal",
//               fontSize: '10px',
//               color: "white",
//             }}
//           />
//         </div>
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
//                       {column.label}
//                     </TableCell>
//                   ))}
//                   <TableCell align="center">Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//                   return (
//                     <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.id === 'email' ? row.user.email : row[column.id]}
                          
//                           </TableCell>
//                         );
//                       })}

//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={customers.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>

//       </div>
//     </div>
//   );
// };
