import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from 'react-icons/fa';

function PageConntect() {
    return (
        <div>
            <span className="icon-twitter">
               <FaTwitter />
            </span><br />
            <h1 className="happ">Happening now</h1>
            <h1 className="join">Join Twitter today.</h1>

            <div>
                <a href="#" className="reseau" style={{color:'gray',width:'300px',padding:'5px 50px'}}>
                <FcGoogle />&nbsp;&nbsp;&nbsp;
                Sign up with Google
                </a><br /><br />
                <a href="#" className="reseau" style={{width:'300px',padding:'5px 53px'}}>
                <FaApple />&nbsp;&nbsp;&nbsp;
                Sign up with Apple
                </a><br /><br />
                <a href="#" className="reseau" style={{padding:'5px 23px'}}>
                &nbsp;&nbsp;&nbsp;
                <span style={{color:'#fff'}}><FaApple /></span>Sign up with phone or mail
                </a>
                <p className="politic">By signing up, you agree to the <a href="#" style={{textDecoration:'none'}}>Terms of Service</a> and <a href="#" style={{textDecoration:'none'}}>Privacy Policy</a>, including <a href="#" style={{textDecoration:'none'}}>Cookie Use</a>.</p>
                <p className="sign"><span>Already have an account</span>? <a href="#" style={{textDecoration:'none',fontFamily:"Arial, Helvetica, sans-serif;"}}>Sign in</a></p>
            </div>
        </div>
    )
}

export default PageConntect
