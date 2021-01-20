import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#fafafb'
    },
    primary: {
      main: '#50b5ff',
      contrastText: '#fff'
    },
    secondary: {
      main: '#01b956',
      contrastText: '#fff'
    },
    text: {
      primary: '#303030'
    },
    action: {
      // active: '#205E8B'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        // textTransform: 'none',
        // borderRadius: 32,
        fontWeight: 600
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      }
    }
  }
})

export default theme