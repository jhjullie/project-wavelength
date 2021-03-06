import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from './../../../src/wavelength.svg';
import '../SignUp/SignUp.css';
import Button from '@mui/material/Button';
import dataservice from '../../Services/Service';

const defaultvalues = {
    first_name:"",
    email:"",
    phonenum:"",
    gender:"",
    age:"",
    password:"",
    password2:"",
    genre:""
};

function SignUp(){
    const [inputs, setInputs] = useState(defaultvalues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    
    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}) )
        
    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(inputs);
        setErrors(validate(inputs));
        setIsSubmit(true);
        
    }

    useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(inputs);
            var data = {
                first_name: inputs.first_name,
                gender: inputs.gender,  
                phonenum: inputs.phonenum,  
                email: inputs.email,
                age: inputs.age,
                genre: inputs.genre
            };
            dataservice.create(data)
            .then((response) => {
                console.log(response)
            });
            
            return navigate('/discover');
        }
    }, [errors])

    
    
    const validate = (values) =>
    {
        const all_errors = {};

        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   

        if (!values.email || !values.first_name || !values.phonenum || !values.age || !values.password){
            all_errors.first_name = "Please fill out all fields!";
        }
        else{
            if (!regex.test(values.email)){
                all_errors.email="Invalid email format!";
            }
    
            if (values.password.length < 4){
                all_errors.password = "Password must be more than 4 characters.";
            }
            else if (values.password !== values.password2){
                all_errors.password = "Passwords do not match!";
            }
            if (values.phonenum.length < 10){
                all_errors.phonenum = "Phone number must be more than 10 digits.";
            }
        }
        

        
        return all_errors;
    };

    return (
        <>
        
        <div id="navbar" >
           
            <ul>
            <li>
            <Link to="/signin" style={{ textDecoration: 'none', color:'black' }}>Log In</Link>
            </li>
            <li id="logo_li">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <img src={logo} id="logo_img" alt="logo" /> */}
                    ??????
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signupcontainer">
            
            <img src={logo} id="mainlogo" alt="logo" />
            

            <form onSubmit={handleSubmit} >
                <div id="signupform">
                    <div className = "col">
                        <label>
                            <p>First Name</p>
                            <input type= "text" name = "first_name" value={inputs.first_name} onChange={handleChange}/>
                        </label>
                        <label>
                            <p>Email</p>
                            <input type= "text" name = "email" value={inputs.email} onChange={handleChange}/>
                        </label>
                        <p className= "errormsg">{errors.email }</p>
                        <label>
                            <p>Phone Number</p>
                            <input type= "text" name = "phonenum" value={inputs.phonenum} onChange={handleChange}/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type= "password" name = "password" value={inputs.password} onChange={handleChange}/>
                        </label>
                        <p className= "errormsg">{errors.password }</p>
                    </div>
                    <div className = "col">
                        <label>
                            <p>Gender Preference</p>
                            <select name="gender" id="gender">
                                <option value="female">Female-identifying</option>
                                <option value="male">Male-identifying</option>
                                <option value="both">Both</option>
                            </select>                         
                        </label>
                        <label>
                            <p>Age</p>
                            <input type= "text" name = "age" value={inputs.age} onChange={handleChange}/>
                        </label>
                        <label>
                            <p>Favorite Genre</p>
                            <select name="genre" id="genre">
                                <option value="hiphop">Hip hop</option>
                                <option value="rnb">RnB</option>
                                <option value="pop">Pop</option>
                                <option value="rock">Rock</option>
                                <option value="classical">Classical</option>
                            </select>                         
                        </label>
                        <label>
                            <p>Confirm Password</p>
                            <input type= "password" name = "password2" value={inputs.password2} onChange={handleChange}/>
                        </label>
                        <p className= "errormsg">{errors.phonenum }</p>
                        <p className= "errormsg">{errors.first_name }</p>
                    </div>
                
                
                
                
                </div>

                <p className="terms">*By signing up, you are agreeing to our Terms &amp; Conditions.</p>

                <div>
                    <Button type="submit" id="signupbutton" variant="contained" color="primary"> Sign Up</Button>
                </div>
            </form>
            
        </div>

        
        </>
        
      );
};

export default SignUp;