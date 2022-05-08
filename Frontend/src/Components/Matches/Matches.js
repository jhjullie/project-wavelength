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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Matches(){

    const navigate = useNavigate();
    function logout(){
        //clear data first??

        return navigate('/');
    }
    function SimpleAccordion() {
        return (
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          );
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
           
       </div>
        <div id="maincontainer">
            <p id="matchesheader">Your Matches</p>
        </div>
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </>
    );

}

export default Matches;