import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
// jullie edits (useRef)
import { useRef, useState, useEffect, useContext} from 'react';
import logo from './../../../src/wavelength.svg';
import Button from '@mui/material/Button';
import '../SignIn/SignIn.css'
import { InputSharp, SettingsInputSvideo, SettingsPowerRounded, SettingsSuggestRounded } from '@mui/icons-material';
//jullie edits
import axios from "axios"
import AuthContext from "../../Context/AuthProvider";

const LOGIN_URL = '/signin'

function SignIn(){
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('')
    const [errors, setError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setError('');
    }, [user, pwd])

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setInputs(values => ({...values, [name]:value}) )
        
    // }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setIsSubmit(true);
        } catch (error) {
            const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if (!user){
                setError("Email is required!");
            }
            else if (!regex.test(user)){
                setError("Invalid email format!");
            }
            else if (!pwd){
                setError("Password is required!");
            }
            else if (pwd.length < 4){
                setError("Password must be more than 4 characters.");
            }

            else if (errRef.response?.status === 401) {
                setError("Unathuorized");
            }
            else {
                setError("Unathuorized");
            }
            errRef.current.focus();
        }
    }

    useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            return navigate('/discover');
        }
    }, [errors])
    
    // const validate = (values) =>
    // {
    //     const all_errors = {};

    //     const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //     if (!values.email){
    //         all_errors.email = "Email is required!";
    //     }
    //     else if (!regex.test(values.email)){
    //         all_errors.email="Invalid email format!";
    //     }
    //     if (!values.password){
    //         all_errors.password = "Password is required!";
    //     }
    //     else if (values.password.length < 4){
    //         all_errors.password = "Password must be more than 4 characters."
    //     }

    //     return all_errors;
    // };

    

    return (
        <>
        <div id="navbar" >
           
            <ul>
            <li>
                <Link to="/signUp" style={{ textDecoration: 'none', color:'black' }}>Sign Up</Link>
            </li>
            <li id="logo_li">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <img src={logo} id="logo_img" alt="logo" /> */}
                    〰️
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signincontainer">
            <img src={logo} id="mainlogo" alt="logo" />
            {/* <pre>{JSON.stringify(inputs)}</pre> */}
            <div id="signinform">
                <p id="signinheader" >Log In</p>
                <form onSubmit={handleSubmit} >
                <label >
                    <p>Email</p>
                    <input type="text" name= "email" ref={userRef} value={user} onChange={(e) => setUser(e.target.value)} />
                </label>
                <p className="errormsg2">{errors.email }</p>
                <label>
                    <p>Password</p>
                    <input type="password" name= "password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                </label>
                <p className= "errormsg2">{errors.password }</p>
                <div>
                    <Button type="submit" id="submitbutton" variant="contained" color="primary">Sign in</Button>
                </div>
                </form>
            </div>

        </div>
        
        </>
        
      );
};

export default SignIn;
