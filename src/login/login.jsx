import './login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import axios from 'axios'


function Loginpage() {
  const [Sign, setSign] = useState(1)
  const [User, setUser] = useState('')
  const [Pass, setPass] = useState('')
  const [SUUS,setSUU]=useState('')
  const [SUP,setSUP]=useState('')
  const [SUPC,setSUPC]=useState('')
  const [checkus, setCheckuser] = useState()
  const [checkps, setCheckps] = useState()
  const [helptext, setHelp] = useState('')
  const [AL,setAL]=useState(false)
  const nagavite = useNavigate()
  const getAPI = () => {
    axios.get('https://66b334137fba54a5b7ebe5f9.mockapi.io/sanpham')
      .then(res => {
        res.data.map((e) => {
          console.log(e.Username)
          if (User == '' || Pass == '') {
            setHelp('Please enter the Username and Password')
            setCheckps(true)
            setCheckuser(true)
          }
          else {
            if (e.Username === User && e.Password === Pass) {
                  nagavite('/home')
            }
            else{
              setCheckps(true)
              setCheckuser(true)
              setHelp('Password incorrect')
            }
          }
        })
      })
      .catch(err => {
        alert('Hệ thống quá tải')
      })
  }
  const submit = (e) => {
    if (e.key === 'Enter') {
      checkuser()
    }
  }
  const submit2 = (e) => {
    if (e.key === 'Enter') {
        Signup()
    }
  }
  const checkuser = () => {
    getAPI() 
  }
  const Signup = async (e)=>{
    if(SUP === SUPC){
      await axios.post('https://66b334137fba54a5b7ebe5f9.mockapi.io/sanpham',{
        Username:SUUS,
        Password:SUPC,
      }
      )
      setAL(true)
    }
    else{
      setCheckps(true)
      setHelp("Password doesn't match")
      setSUP('')
      setSUPC('')

    }
  }
  useEffect(() => {
    setCheckps(false)
    setCheckuser(false)
    setHelp('')
    setSUP('')
    setSUPC('')
    setSUU('')
  }, [Sign])
  return (
    <div className="App">
      <div className="login">
        <div className='Sign' >
          <Stack spacing={1} direction="row">
              <Button variant="outlined" color="success" className='buttons'  onClick={() => { setSign(1) }} >Sign In</Button>
              <Button variant="outlined" className='buttons1'  onClick={() => { setSign(0) }}>Sign Up</Button>
          </Stack>
        </div>
              {Sign == 1 ?
                <input type='radio' name='as' id='Signin' checked></input> :
                <input type='radio' name='as' id='Signin'></input>}
              {Sign == 0 ?
              <input type='radio' name='as' id='Signup' checked></input> :
              <input type='radio' name='as' id='Signup'></input>
              } 
              <div className='tabinterated'></div>
        <div className='Logominhquan'>MQLK</div>
        <div className='Signin'>
          <Box className='Text' component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off" >
            <TextField error={checkus}  id='Username' label='Username' variant='outlined' onChange={(e) => { setUser(e.target.value) }}></TextField>
            <TextField error={checkps} helperText={helptext}  id='Password' label='Password' variant='outlined' onChange={(e) => { setPass(e.target.value) }} type="password" onKeyDown={submit}></TextField>
          </Box>
          <div className='buttonlogin'><Button variant='contained' color='error' onClick={checkuser}>Login</Button></div>
        </div>
        <div className='Signup'>
          <Box className='Text' component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off" >
            <TextField error={checkus} required id='username' label='Username' variant='outlined' onChange={(e) => { setSUU(e.target.value) }} value={SUUS}></TextField>
            <TextField error={checkps} required id='password' label='Password' variant='outlined' onChange={(e) => { setSUP(e.target.value) }} type="password" onKeyDown={submit} value={SUP}></TextField>
            <TextField error={checkps} helperText={helptext} required id='passwordconfirm' label='Password Confirm' variant='outlined' onChange={(e) => { setSUPC(e.target.value) }} value={SUPC} type="password" onKeyDown={submit2}></TextField>
            {AL?<Alert severity="success">Sign up Success</Alert>:null}
          </Box>
          <div className='buttonlogin'> <Button variant='contained' onClick={Signup}>Sign Up</Button></div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
