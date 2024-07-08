import PropTypes from 'prop-types'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

// Página para que el usuario se registre si no tiene una cuenta
export const RegisterPage = () => {
    return (
        <AuthLayout title='Registro'>
            <form action="">
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
                            <Button variant='contained' fullWidth >
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
