import { CircularProgress, Grid } from "@mui/material"

// Componente checking que muestra un loader cuando se compruebe si el usuario esta loggeado o no
export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            // direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                sx={{
                    width: { sm: 'fit-content' },
                }}
            >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}
