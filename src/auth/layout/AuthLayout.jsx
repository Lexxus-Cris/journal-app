import { Grid, Typography } from '@mui/material'

// Layout genérico para reutilizar en las vistas de la sección de login
export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                className='box-shadow'
                xs={3}
                sx={{
                    width: { sm: 450 },
                    bgcolor: 'white',
                    p: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

                { children }
            </Grid>
        </Grid>
    )
}
