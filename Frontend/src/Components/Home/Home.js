import logo from './../../../src/wavelength.svg';
import './Home.css';
import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


function Home() {
    return (
      
      <div className="Home">
      <p id="wavelengthname">wavelength</p>
      
      <p id="opening">Find your wavelength.</p>

      <div>
        <Link to="/signup" class='firstbutton' style={{ textDecoration: 'none', color:'white' }}>
          Join</Link>
      </div>

      <div>
      <Link to = "/signin" class="secondbutton" style={{ textDecoration: 'none' }}>
          Log In</Link>
      </div>
    </div>
  
    );
  }

  export default Home;