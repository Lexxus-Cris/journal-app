import { Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

// Página que le permite al usuario iniciar sesión con su cuenta de la página o su cuenta de google
export const LoginPage = () => {

    const dispatch = useDispatch();
    
    const { email, password, onInputChange } = useForm({
        email: 'uriel@gmail.com',
        password: '12345'
    })

    const onSubmit = (e) =>{
        e.preventDefault();

        console.log({ email, password });
        dispatch(checkingAuthentication())
    }

    const onGoogleSignIn = () => {
        console.log('google signin');

        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='login'>
            <form action="" onSubmit={onSubmit}>
                <Grid container >
                    <Grid item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='correo@gmail.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={() => onInputChange()}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='contraseña'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={() => onInputChange()}
                        />
                    </Grid>

                    <Grid container
                        spacing={2}
                        sx={{ mb: 2, mt: 2}}
                    >
                        <Grid item
                            xs={12}
                            sm={6}
                        >
                            <Button variant='contained'fullWidth type='submits' >
                                Login
                            </Button>
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                        >
                            <Button variant='contained'fullWidth onClick={onGoogleSignIn}>
                                <Google/>
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                        direction='row'
                        justifyContent='end'
                    >
                        <Link component={RouterLink} color='inherit' to='/auth/register' >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
