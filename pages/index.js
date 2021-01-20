import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography, Button } from '@material-ui/core'
import Link from 'next/link'

// icons
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined'
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import TopBanner from '../components/HomeLayout/TopBanner'

const useStyles = makeStyles((theme) => ({
  content: {
    boxShadow: '0px 0px 20px 0px rgba(44, 101, 144, 0.1)',
    background: '#fff',
    borderRadius: 5,
    height: '100%',
    padding: theme.spacing(3)
  }
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Container>
      <TopBanner />    
      <Box textAlign='center' pt={6}>
        <Typography variant='h3' component='h3'>How it works?</Typography>
      </Box>
      <Box
        textAlign='center'
        color='text.secondary'
        fontSize={28}
        fontWeight={300}
        pt={2}
        mb={10}
      >
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Box>

      <Box textAlign='center' mb={5}>
        <Typography variant='h3' component='h3'>Teach process include</Typography>
      </Box>

      <Grid
        container
        direction='row'
        spacing={4}
      >
        <Grid item xs={12} sm={4}>
          <Box
            className={classes.content}
            textAlign='center'
            color='text.secondary'
            fontSize={22}
            fontWeight={300}
            pt={2}
            pb={10}
          >
            <Box mb={3}>
              <ScreenShareOutlinedIcon color='primary' style={{ fontSize: 50 }} />
            </Box>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            className={classes.content}
            textAlign='center'
            color='text.secondary'
            fontSize={22}
            fontWeight={300}
            pt={2}
            pb={8}
          >
            <Box mb={3}>
              <ContactsOutlinedIcon color='primary' style={{ fontSize: 50 }} />
            </Box>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            className={classes.content}
            textAlign='center'
            color='text.secondary'
            fontSize={22}
            fontWeight={300}
            pt={2}
            pb={8}
          >
            <Box mb={3}>
              <LibraryMusicOutlinedIcon color='primary' style={{ fontSize: 50 }} />
            </Box>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Box>
        </Grid>
      </Grid>
      <Box pt={5} mb={8} textAlign='center'>
        <Link href='/about'>
          <Button size='large' variant='outlined' color='primary'>More details</Button>
        </Link>
      </Box>
    </Container>
  )
}

export default IndexPage
