Profile js
import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Profile/Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import PublicIcon from '@mui/icons-material/Public';

function Profile(){
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
                   〰️
               </Link>
           </li>
           </ul>
           
       </div>
        <div id="maincontainer">
          <div id="myprofile">
            <p id="profileheader">My Profile</p>
            <div className = "col">
                    <label>
                        <p>First Name {' '}
                            <input type= "text" name = "first_name" class="myinput"/>
                        </p>
                    </label>
                    <label>
                        <p>Email {' '}
                            <input type= "text" name = "email" class="myinput"/>
                        </p>
                    </label>
                    <label>
                        <p>Phone Number {' '}
                            <input type= "text" name = "phonenum" class="myinput"/>
                        </p>
                    </label>
                    <label>
                        <p>Password {' '}
                            <input type= "password" name = "password" class="myinput"/>
                        </p>
                    </label>
                    <label>
                        <p>Gender {' '}
                            <select name="gender" id="gender" class="myinput">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="both">Non Binary</option>
                            </select>
                        </p>                         
                    </label>
                    <label>
                        <p>Age {' '}
                            <input type= "text" name = "age" class="myinput"/>
                        </p>
                    </label>
                    <label>
                        <p>Favorite Genre {' '}
                            <select name="gender" id="gender" class="myinput">
                                <option value="hiphop">Hip hop</option>
                                <option value="rnb">RnB</option>
                                <option value="pop">Pop</option>
                                <option value="rock">Rock</option>
                                <option value="classical">Classical</option>
                            </select>     
                        </p>                    
                    </label>
                    <label>
                        <p>Confirm Password {' '}
                            <input type= "password" name = "password2" class="myinput"/>
                        </p>
                    </label>
                </div>
            </div>
        </div>

        </>
    );
}

export default Profile;






