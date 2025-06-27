import './App.css';
import {Box,Button,Stack,TextField,Typography}from "@mui/material";
import { useState } from 'react';
function App() {
  const [username,setUserName] = useState('');
  const[password,setPassword]=useState('');
  const[message,setMessage]=useState('');
  const[error,setError] = useState(false);
  const handleSubmit=(event)=>{
   event.preventDefault();
   const form = event.target;
   const enteredusername = form.username.value;
   const enteredpassword = form.password.value;
   if(enteredusername==="user" && enteredpassword==="password"){
   setUserName(enteredusername);
   setPassword(enteredpassword);
   setMessage("Welcome, user!");
   setError(false)
   }else{
    setMessage("Invalid username or password");
    setError(true);
   }
  }
  const isLoggedIn= username && password && !error
  return (
  <Stack width='100vw'>
  <form onSubmit={handleSubmit}>
  <Typography variant="h1" component={'h1'} textAlign={'center'}>
    Login Page
  </Typography>
     {/* Show message if exists */}
      {message && (
        <Typography
          variant="h6"
          color={error ? "error" : "primary"}
          textAlign="center"
          margin={2}
        >
          {message}
        </Typography>
      )}
<Stack direction={'column'} alignItems={'center'} padding={2} margin={5} gap={2}>
 <label>Username:<input name="username"  value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder="username" required style={{width:'400px',padding:'10px'}}/>
</label>
<label>Password:<input name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"style={{width:'400px',padding:'10px'}}  required/>
</label>
    <button style={{padding:'10px'}}>Submit</button>
    </Stack>
  </form>
  {isLoggedIn &&  (
   <Typography variant="h3" component={'h3'}>{message}</Typography>
  )
   }
  </Stack>
  );
}

export default App;
