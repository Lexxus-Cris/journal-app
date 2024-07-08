import { CssBaseline, ThemeProvider } from '@mui/material';
import { purpleTheme } from './purpleTheme';

// Componente que se utiliza para proveer el tema de MUI a nuestro proyecto, ya sea que nosotros hayamos creado este tema o no, es necesario realizar esta configuración
export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme} >
            <CssBaseline />

            {children}
        </ThemeProvider>
    )
}
