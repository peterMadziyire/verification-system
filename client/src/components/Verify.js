import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";


  

const Verify = () => {

  let stripe;

const loadKey= async()=>{
  const {publishableKey} = await fetch('/config').then(r=>r.json());
  stripe = await loadStripe(publishableKey);
  console.log(stripe)

}
    
  
    

const StartVerification=async (e)=>{

   
 

    // const verifyObject= axios.get("http://localhost:4242/v1/identity/verification_sessions/vs_1MFSdALudVb3P8LHMKi5ORCV").then(r => console.log(r))
    // console.log("testing")

    // console.log(stripe)

    try {

      // const {publishableKey} = await fetch('http://localhost:4242/config').then(r=>r.json());
      // const stripe = await loadStripe(publishableKey);
      // console.log(stripe)
        // Create the VerificationSession on the server.
        const {client_secret} = await fetch('/create-verification-session', {
          method: 'POST',
        }).then(r => r.json()
         )

        // Open the modal on the client.
        const {error} = await stripe.verifyIdentity(client_secret);
        if(!error) {
            <Navigate to={'/'}/>
        } else {
          alert(error.message);
          console.log(error.message);
        }
      } catch(e) {
        alert(e.message);
        console.log(e.message);
      }

}

useEffect(()=>{
    loadKey()
    
      },[])
    


  return (
    <div>

<h1>Verify your identity to book</h1>
            <h4>Get ready to take a photo of your ID and a selfie</h4>

            <button onClick={StartVerification} id="verify-button" >Verify me</button>
    </div>
  )
}

export default Verify