import PropTypes from 'prop-types'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

const JournalApp = () => {
    return (
        // El router principal de la aplicación
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}

JournalApp.propTypes = {}

export default JournalApp