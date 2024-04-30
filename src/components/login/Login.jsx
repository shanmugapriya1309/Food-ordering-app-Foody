import React, { useContext, useRef } from 'react'
import './Login.css'

import { useState } from 'react'

import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Context'
 
const Login = ({setShowLogin}) => {
    const{setUser}=useContext(StoreContext)
    let acc=JSON.parse(localStorage.getItem('account'));
    
    let account1=[];
    account1=Array.isArray(acc) ? [...acc] : [];
    let emailRef=useRef();
    let passRef=useRef();
    let nameRef=useRef();
    
    let handleSignUp=(e)=>{
        e.preventDefault();
        
        let emailVal=emailRef.current.value;
        let passVal=passRef.current.value;
        let nameVal=nameRef.current.value;
        let account={emailVal,passVal,nameVal};
        
        account1.push(account)
        // let account1=[...account];
        // account1.push(account);
        localStorage.setItem('account',JSON.stringify(account1));
        console.log({emailVal,passVal,nameVal});
        alert("Account created successfully!!!")
        setShowLogin(false);
    }
    let handleAccount=(e)=>{
        e.preventDefault();
        let emailVal=emailRef.current.value;
        let passVal=passRef.current.value;
        let log={emailVal,passVal};
        
        let matchedAccount = account1.find(item => item.emailVal === log.emailVal && item.passVal === log.passVal);
        if (account1.some(item => item.emailVal === log.emailVal && item.passVal === log.passVal)) {
            alert("Login successfull!!!");
            setShowLogin(false);
            console.log(matchedAccount.nameVal);
            setUser(matchedAccount.nameVal);
        }
        else{
            alert("Login failed. Please check your credentials.");
        }
        
        console.log({emailVal,passVal});
    }
    

    const[currState,setCurrState]=useState("Login");
  return (
    <div className='login'>
        <form action="" className='container' onSubmit={currState === "Sign Up" ? handleSignUp : handleAccount}>
            <div className='login-header'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.muttiply_icon}alt="" />
                
            </div>
            <div className='button'>
                {currState === "Login" ? <></>:<input type="text" ref={nameRef} placeholder='Your name' required/>}
                <input type="email" ref={emailRef} placeholder='Your email' required/>
                <input type="password" ref={passRef} placeholder='Password' required/>
                <button>{currState === "Sign Up" ? "Create Account":"Login"}</button>
            </div>
            {/* <div className='checkbox'> 
                <input type="checkbox" />
                By continuing i agree to the terms and use and privacy policy
            </div> */}
            <div className='account'>{currState==="Login" ?  
            <p> Don't have an account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: 
               <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
               
            </div>
        </form>
      
    </div>
  )
}

export default Login
