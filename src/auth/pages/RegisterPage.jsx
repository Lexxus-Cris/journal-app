import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useState } from 'react';

// Reglas de validación para el formulario de registro 
const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe contener una @'],
    password: [ (value) => value.length >= 6, 'El password debe tener más de seis caracteres'],
    name: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

// Página para que el usuario se registre si no tiene una cuenta
export const RegisterPage = () => {

    const [formSubmited, setFormSubmited] = useState(false)

    const {
        formState, name, email, password, onInputChange,
        isFormValid, nameValid, emailValid, passwordValid
    } = useForm({
        name: '',
        email: '',
        password: ''
    }, formValidations);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true)

        if ( !isFormValid) return;

        console.log(formState);
    }

    return (
        <AuthLayout title='Registro'>
            <Typography variant='h6'>FormValid: { isFormValid ? 'Válido' : 'Incorrecto' }</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container >
                    <Grid item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label='Nombre completo'
                            type='email'
                            placeholder='Nombre completo'
                            fullWidth
                            name='name'
                            value={name}
                            onChange={onInputChange}
                            error={ !!nameValid && formSubmited }
                            helperText={ formSubmited && nameValid }
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
                            sm={6}
                        >
                            <Button
                                type='submit'
                                variant='contained'
                                fullWidth
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
