import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Box } from '@material-ui/core'
import Link from 'next/link'
import MainMenu from './MainMenu'

const useStyles = makeStyles((theme) => ({
  logo: {
    textDecoration: 'none',
    color: '#000',
    fontSize: 24,
    '& button': {
      '&.active': {
        background: 'rgba(48, 48, 48, 0.04)'
      }
    }
  },
  appBar: {
    boxShadow: 'none',
    marginBottom: theme.spacing(5)
  },
  header: {
    position: 'relative',
    background: '#fff',
    boxShadow: '0 0 15px 0 rgba(0,0,0,.15)',
    color: '#000',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    zIndex: 100
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.appBar}>
      <Box
        display='flex'
        justify='center'
        alignItems='center'
        justifyContent='space-between'
        className={classes.header}
      >
        <Link href='/'>
          <a className={classes.logo}>
            Music<Box component='span' fontWeight='500' color='primary.main'>School</Box>
          </a>
        </Link>
        <MainMenu />
      </Box>
    </AppBar>
  )
}

export default Header
