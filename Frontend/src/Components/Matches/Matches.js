import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Matches/Matches.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import PublicIcon from '@mui/icons-material/Public';
//import services from "../services/Service.js";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
// import { Box } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function Matches(){

    const navigate = useNavigate();
    function logout(){
        //clear data first??

        return navigate('/');
    }
    return(
        <>
        <div id="navbar" >
           
           <ul>
                <li> 
                    < LogoutIcon fontSize="large" onClick= {logout}/>
               </li>

                <li>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                        < AccountCircleIcon fontSize="large"/>
                    </Link>
               </li>
               
               <li>
                    <Link to="/matches" style={{ textDecoration: 'none', color: 'black' }}>
                        <FavoriteRoundedIcon fontSize="large"/>
                    </Link>
               </li>
               <li>
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                        < HomeRoundedIcon fontSize="large"/>
                    </Link>
               </li>
               <li> 
                    <Badge badgeContent={4} color="secondary">
                    < PublicIcon fontSize="large"/>
                    </Badge>
               </li>
           <li id="logo_li">
               <Link to="/" style={{ textDecoration: 'none' }}>
                   {/* <img src={logo} id="logo_img" alt="logo" /> */}
               </Link>
           </li>
           </ul>
           {/* Code regarding the actual page */}
       </div>
        <div id="maincontainer">
            <p id="matchesheader">Your Matches</p>
        </div>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
     




        </>
    );

}

export default Matches;