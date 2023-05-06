import React from 'react'
import { AuthContext } from "../context/authContext";
import { useContext } from 'react';
const HomePage = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    <h1>
      This is the homepage
      {
        user ?
        <h2>{user.username} is logged in</h2>
        :
        <p>
          There is no user Data
        </p>
      }
    </h1>
    </>
    
  )
}

export default HomePage;
