import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SessionExpire = () => {


  // useEffect(()=>{
  //   window.location.reload();
  // },[])

    const navigate = useNavigate();

    const handleLoginRedirect = () => {
      navigate("/login");
    };


  return (
    <>
    <div>
      <h2>Session Expired</h2>
      <p>Your session has expired. Please log in again to continue.</p>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </div>
    </>
  )
}

export default SessionExpire


