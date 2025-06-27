import './App.css';
import {Box,Button,Stack,TextField,Typography}from "@mui/material";
import { useState } from 'react';
function App() {
  const [username,setUserName] = useState('');
  const[password,setPassword]=useState('');
  const[message,setMessage]=useState('');
  const handleSubmit=(event)=>{
   event.preventDefault();
   const form = event.target;
   const enteredusername = form.username.value;
   const enteredpassword = form.password.value;
   if(enteredusername==="user" && enteredpassword==="password"){
   setUserName(enteredusername);
   setPassword(enteredpassword);
   setMessage("Welcome, user!")
   }else{
    setUserName(enteredusername);
    setPassword(enteredpassword);
    setMessage("Invalid username or password")
   }
  }
  return (
  <Stack width='100vw'>
  <form onSubmit={handleSubmit}>
  <Typography variant="h1" component={'h1'} textAlign={'center'}>
    Login Page
  </Typography>
     {!username && !password && (
 <Stack direction={'column'} alignItems={'center'} padding={2} margin={5} gap={2}>
    <input name="username" labelled="Username" placeholder="username" required style={{width:'400px',padding:'10px'}}/>
    <input name="password" labelled="Password" placeholder="password"style={{width:'400px',padding:'10px'}}  required/>
    <button type='submit' style={{padding:'10px'}}>Submit</button>
    </Stack>
     )}
  </form>
  {message && (
   <Typography variant="h3" component={'h3'}>{message}</Typography>
  )
   }
  </Stack>
  );
}

export default App;
