// import React, { useEffect } from 'react'
// import {Grid, TextField, Button} from '@mui/material'
// import {useNavigate} from 'react-router-dom'
// import { useDispatch ,useSelector} from 'react-redux'
// import { getUSer, login } from '../../State/Auth/Action'
// import Swal from 'sweetalert2'
// const Login = () => {
//   const dispatch = useDispatch();
//     const navigate = useNavigate()
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
          
//             password: data.get("password"),
//             email: data.get("email")
//         }
//         dispatch(login(userData));
        
//         console.log(userData)
//     }
    
//         if(jwt){
//           const Toast = Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.onmouseenter = Swal.stopTimer;
//               toast.onmouseleave = Swal.resumeTimer;
//             }
//           });
//         Toast.fire({
//           icon: "success",
//           title: "Đăng nhập thành công"
//         });
//       }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
             
             
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
//                     Đăng nhập
//                 </Button>
//             </Grid>
//         </Grid>
//       </form>
//       <div className='flex  justify-center flex-col items-center'>
//       <div className='py-3 flex items-center '>
//         <p className=' flex    '>Chua co tai khoan? </p>   
//         <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Đăng ky ngay</Button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Login;
import React, { useEffect } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUSer, login } from '../../State/Auth/Action';
import Swal from 'sweetalert2';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUSer(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if (auth.user) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      navigate('/');
    }
  }, [auth.user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(login(userData));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, px: { xs: 2, sm: 4 } }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              Đăng nhập
            </Typography>
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
              autoComplete="current-password"
              id="password"
              name="password"
              label="Mật khẩu"
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
              Đăng nhập
            </Button>
          </Grid>
        </Grid>
      </form>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2" sx={{ mt: 2 }}>
          Chưa có tài khoản?
        </Typography>
        <Button
          onClick={() => navigate('/register')}
          size="small"
          sx={{ mt: 1 }}
        >
          Đăng ký ngay
        </Button>
      </div>
    </Container>
  );
};

export default Login;


