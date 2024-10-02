import './login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Router, useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

function Loginpage() {
  const [Sign, setSign] = useState(1)
  const [User, setUser] = useState('')
  const [Pass, setPass] = useState('')
  const [SUUS, setSUU] = useState('')
  const [SUP, setSUP] = useState('')
  const [SUE, setSUE] = useState('')
  const [SUPC, setSUPC] = useState('')
  const [checkus, setCheckuser] = useState()
  const [checkps, setCheckps] = useState()
  const [checkem, setCheckemail] = useState()
  const [helptext, setHelp] = useState('')
  const [helptextemmail, setHelpemail] = useState('')
  const [helptextuser, setHelpuser] = useState('')
  const [AL, setAL] = useState(false)
  const nagavite = useNavigate()

  const checkemail = (SUE) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(SUE);
  };
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
  const checkuser = async () => {
    if (User != '' || Pass != '') {
      await axios.post('http://localhost:8000/authen', {
        username: User,
        password: Pass
      })
        .then((res) => {
          if (res.data.message == true) {
            nagavite('./home', { state: { id: res.data.user._id, username: res.data.user.username } })
            console.log(res.data.user._id)
          }
          else {
            setCheckps(true)
            setCheckuser(true)
            setHelp(res.data.message)
          }
        })
    }
    else {
      setCheckps(true)
      setCheckuser(true)
      setHelp('Vui Lòng Nhập Đầy Đủ Password và Username')
    }
  }
  const Signup = async (e) => {
    if (SUUS !== '' && SUP !== "" && SUPC !== '') {
      if (checkemail(SUE) == true) {
        if (SUP === SUPC) {
          await axios.post('http://localhost:8000/user', {
            username: SUUS,
            password: SUPC,
            email: SUE
          }
          )
            .then((res) => {
              if (res.data == '0') {
                setCheckuser(true)
                setHelpemail(false)
                setHelpuser('Tài khoản đã tồn tại')
                setHelpemail('')

              }
              if (res.data == '1') {
                setHelpemail('Email đã tồn tại')
                setCheckemail(true)
                setCheckuser(false)
                setHelpuser('')

              }
              if (res.data == '2') {
                setAL(true)
                setCheckps(false)
                setCheckuser(false)
                setCheckemail(false)
                setHelpuser('')
                setHelpemail('')
                setSUP('')
                setSUPC('')
                setSUE('')
              }
            })

        }
        else {
          setCheckps(true)
          setCheckemail(false)
          setHelpemail('')
          setHelp("Password không trùng khớp")
          setSUP('')
          setSUPC('')

        }
      }
      else {
        setCheckemail(true)
        setCheckps(false)
        setHelp("")
        setHelpemail("Email không hợp lệ")
        setSUP('')
        setSUPC('')
        setSUE('')
      }
    }
    else {
      setCheckps(true)
      setHelp("Vui lòng điền đầy đủ thông tin")
      setSUP('')
      setSUPC('')
      setSUE('')
    }
  }
  useEffect(() => {
    console.log('render')
    setCheckps(false)
    setCheckuser(false)
    setAL(false)
    setCheckemail(false)
    setHelp('')
    setSUP('')
    setSUPC('')
    setSUU('')
    setSUE('')
    setHelpemail('')
  }, [Sign])

  return (
    <div className="App">
      <div className="login">
        <div className='Sign' >
          <Stack spacing={1} direction="row">
            <Button variant="outlined" color="success" className='buttons' onClick={() => { setSign(1) }} >Sign In</Button>
            <Button variant="outlined" className='buttons1' onClick={() => { setSign(0) }}>Sign Up</Button>
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
            <TextField error={checkus} id='Username' label='Username' variant='outlined' onChange={(e) => { setUser(e.target.value) }}></TextField>
            <TextField error={checkps} helperText={helptext} id='Password' label='Password' variant='outlined' onChange={(e) => { setPass(e.target.value) }} type="password" onKeyDown={submit}></TextField>
          </Box>
          <div className='buttonlogin'><Button variant='contained' color='error' onClick={checkuser}>Login</Button></div>
        </div>
        <div className='Signup'>
          <Box className='Text' component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off" >
            <TextField error={checkus} helperText={helptextuser} required id='username' label='Username' variant='outlined' onChange={(e) => { setSUU(e.target.value) }} value={SUUS}></TextField>
            <TextField error={checkem} helperText={helptextemmail} required id='Email' label='Email' variant='outlined' onChange={(e) => { setSUE(e.target.value) }} value={SUE}></TextField>
            <TextField error={checkps} required id='password' label='Password' variant='outlined' onChange={(e) => { setSUP(e.target.value) }} type="password" onKeyDown={submit} value={SUP}></TextField>
            <TextField error={checkps} helperText={helptext} required id='passwordconfirm' label='Password Confirm' variant='outlined' onChange={(e) => { setSUPC(e.target.value) }} value={SUPC} type="password" onKeyDown={submit2}></TextField>
            {AL ? <Alert severity="success">Sign up Success</Alert> : null}
          </Box>
          <div className='buttonlogin'> <Button variant='contained' onClick={Signup}>Sign Up</Button></div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
