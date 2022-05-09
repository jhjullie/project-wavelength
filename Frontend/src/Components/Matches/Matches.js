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
    { field: 'firstName', headerName: 'First name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    { field: 'gender', headerName: 'Gender', width: 130 },
     { field: 'genre', headerName: 'Genre', width: 130 },
  ];
  
  const rows = [
    { id: 1, firstName: 'Jenny', age: 22, gender: 'Female', genre: 'rock'},
    { id: 2, firstName: 'Carlos', age: 24, gender: 'Male', genre: 'rnb' },
    { id: 3, firstName: 'Presley', age: 19, gender: 'Female', genre: 'rnb'},
    { id: 4, firstName: 'Riley', age: 18, gender: 'Non Binary', genre: 'classical' },
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
