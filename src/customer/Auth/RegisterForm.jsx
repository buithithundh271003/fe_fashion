// import React, { useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import {Grid, TextField, Button} from '@mui/material'
// import { getUSer, register } from '../../State/Auth/Action'
// const RegisterForm = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const jwt = localStorage.getItem('jwt');
//     const {auth} = useSelector(store=>store)
//     useEffect(()=>{
//         if(jwt){
//             dispatch(getUSer(jwt));
//         }
//     },[jwt,auth.jwt])

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         const userData = {
//             firstName: data.get("firstName"),
//             lastName: data.get("lastName"),
//             password: data.get("password"),
//             email: data.get("email")
//         }
//         dispatch(register(userData));
//         console.log(auth)
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//                 <TextField
//                 required
//                 autoComplete='given-name'
//                 id='firstName'
//                 name='firstName'
//                 label = 'First Name'
//                 fullWidth
//                 />

                 
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField
//                 required
//                 autoComplete='given-name'
//                 id='lastName'
//                 name='lastName'
//                 label = 'Last Name'
//                 fullWidth
//                 />

                 
//             </Grid>
//             <Grid item xs={12} >
//                 <TextField
//                 required
//                 autoComplete='email'
//                 id='email'
//                 name='email'
//                 label = 'Email'
//                 fullWidth
//                 />

                 
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 autoComplete='passord'
//                 id='password'
//                 name='password'
//                 label = 'Password'
//                 fullWidth
//                 type='password'
//                 />

                 
//             </Grid>
//             <Grid item sx={12} sm={12}>
//                 <Button
//                 className='bg-[#9155FD] w-full'
//                 type='submit'
//                 variant='contained'
//                 size='large'
//                 sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
//                 >
//                     Đăng ký
//                 </Button>
//             </Grid>
//         </Grid>
//       </form>
//       <div className='flex  justify-center flex-col items-center'>
//       <div className='py-3 flex items-center '>
//         <p className=' flex    '>Đã có tài khoản? </p>   
//         <Button onClick={()=>navigate("/login")} className='ml-5' size='smaill'>Đăng nhập ngay</Button>
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default RegisterForm
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Container, Typography } from '@mui/material';
import { getUSer, register } from '../../State/Auth/Action';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUSer(jwt));
    }
  }, [jwt, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      password: data.get('password'),
      email: data.get('email'),
    };
    dispatch(register(userData));
    console.log(auth);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, px: { xs: 2, sm: 4 } }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Đăng ký tài khoản
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              autoComplete="given-name"
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              autoComplete="family-name"
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              autoComplete="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              autoComplete="new-password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              type="password"
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                py: 1.2,
                bgcolor: '#9155FD',
                '&:hover': { bgcolor: '#7c3aed' },
              }}
            >
              Đăng ký
            </Button>
          </Grid>
        </Grid>
      </form>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" sx={{ mt: 2 }}>
          Đã có tài khoản?
        </Typography>
        <Button onClick={() => navigate('/login')} size="small" sx={{ mt: 1 }}>
          Đăng nhập ngay
        </Button>
      </div>
    </Container>
  );
};

export default RegisterForm;
