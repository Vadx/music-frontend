import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Box, Hidden, Drawer } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  nav: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: 30
    }
  },
  menuWrap: {
    margin: 0,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      padding: 0,
      display: 'flex',
      flex: '1 0 0',
      flexDirection: 'row'
    }
  },
  menuButton: {
    // color: '#727474',
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: 240
  },
  menuIcon: {
    '& .MuiSvgIcon-root': {
      fill: '#727474'
    }
  }
}))

const MainMenu = (props) => {
  const classes = useStyles()
  const router = useRouter()
  const { container } = props
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerMenu = (
    <Box component='ul' className={classes.nav}>
      <Link href='/profiles'>
        <Button className={router.pathname === '/profiles' ? 'active' : ''}>Profiles</Button>
      </Link>
      <Link href='/pricing'>
        <Button className={router.pathname === '/pricing' ? 'active' : ''}>Pricing</Button>
      </Link>
      <Link href='/about'>
        <Button className={router.pathname === '/about' ? 'active' : ''}>Teach process</Button>
      </Link>
      <Link href='/contacts'>
        <Button className={router.pathname === '/contacts' ? 'active' : ''}>Contacts</Button>
      </Link>
    </Box>
  )

  return (
    <>
      <Hidden mdUp implementation='css'>
        <Button
          color='inherit'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          startIcon={<MenuIcon color='primary' />}
        >
            Menu
        </Button>
        <Drawer
          container={container}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <Box onClick={handleDrawerToggle}>
            {drawerMenu}
          </Box>
        </Drawer>
      </Hidden>
      <Hidden className={classes.desctopWrap} smDown implementation='css'>{drawerMenu}</Hidden>
    </>
  )
}

export default MainMenu
