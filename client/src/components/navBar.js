import {AppBar, Box, Toolbar, Typography, Button} from "@mui/material"
import React,{useContext} from 'react'
import {Link} from "react-router-dom";// it helps us go to different routes in our app
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const NavBar = () => {

  let navigate = useNavigate()
  const {user,logout} = useContext(AuthContext)
  
  const onLogout =()=>{
    logout();
    navigate('/')
  }
  console.log(user)
  return (
    <Box sx = {{flexGrow:1}}>
     <AppBar position="static">
        <Toolbar>
            <Typography variant="h4" component="div">
            <Link to ="/" style={{textDecoration:"none", color:"white"}}>ReactLogin</Link>
            </Typography>
            <Box alignItems="right" sx={{flexGrow:1, textAlign:"right"}}>
              {user ?
              <>
              <Button style={{textDecoration:"none", color:"white" }} onClick={onLogout}>logout</Button>
              </>
              :
              <>
              <Link to ="/login" style={{textDecoration:"none", color:"white", marginRight:"10px"}}>Login</Link>
              <Link to ="/register" style={{textDecoration:"none", color:"white"}}>Register</Link>
              </>
              
              
              }
            
            </Box>
        </Toolbar>
     </AppBar>
    </Box>
  )
}

export default NavBar
