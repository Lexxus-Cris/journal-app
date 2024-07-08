import PropTypes from 'prop-types'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

const JournalApp = () => {
    return (
        // Provider del theme de MUI
        <AppTheme>
            {/* El router principal de la aplicación */}
            <AppRouter />
        </AppTheme>
    )
}

JournalApp.propTypes = {}

export default JournalApp