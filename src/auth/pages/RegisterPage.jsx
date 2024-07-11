import { AuthLayout } from '../layout/AuthLayout';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

// Reglas de validación para el formulario de registro 
const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe contener una @'],
    password: [ (value) => value.length >= 6, 'El password debe tener más de seis caracteres'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

// Página para que el usuario se registre si no tiene una cuenta
export const RegisterPage = () => {


    const [formSubmited, setFormSubmited] = useState(false)

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm({
        displayName: '',
        email: '',
        password: ''
    }, formValidations);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true)

        if ( !isFormValid) return;

        console.log(formState);
        dispatch( startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title='Registro'>
            <Typography variant='h6'>FormValid: { isFormValid ? 'Válido' : 'Incorrecto' }</Typography>
            <form
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={handleSubmit}>
                <Grid container >
                    <Grid item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label='Nombre completo'
                            type='text'
                            placeholder='Nombre completo'
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={ !!displayNameValid && formSubmited }
                            helperText={ formSubmited && displayNameValid }
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='tucorreo@gmail.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={ !!emailValid && formSubmited}
                            helperText={ formSubmited && emailValid }
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
                            onChange={onInputChange}
                            error={ !!passwordValid && formSubmited }
                            helperText={ formSubmited && passwordValid }
                        />
                    </Grid>

                    <Grid container
                        spacing={2}
                        sx={{ mb: 2, mt: 2 }}
                    >
                        <Grid item
                            xs={12}
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                type='submit'
                                variant='contained'
                                fullWidth
                                disabled={isCheckingAuthentication}
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                        direction='row'
                        justifyContent='end'
                    >
                        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login' >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}

RegisterPage.propTypes = {}
