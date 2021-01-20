import { Grid, Box, Button, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  bgWrap: {
    position: 'relative',
    height: '100%',
    width: '50vw',
    marginTop: '-40px',
    zIndex: '-1',
    [theme.breakpoints.up('sm')]: {
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
    }
  },
  imgWrap: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    minHeight: 600
  },
  mainTitle: {
    fontSize: 58,
    fontWeight: 300,
    position: 'relative',
    paddingTop: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      fontSize: 46,
      textAlign: 'center'
    }
  },
  isMobileWrap: {
    maxHeight: 500,
    position: 'relative'
  }
}))

const TopBanner = () => {
  const classes = useStyles()

  return (
    <>
      <Hidden className={classes.desctopWrap} smDown implementation='css'>
        <Grid
          container
          direction='row'
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <Box className={classes.mainTitle}>
              Music lesssons online for kids and adults
            </Box>
            <Box pt={6}>
              <Link href='/profiles'>
                <Button size='large' variant='contained' color='primary'>See all Teachers</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.imgWrap}>
            <Box className={classes.bgWrap}>
              <Image
                layout='fill'
                objectFit='cover'
                quality={100}
                src='/home-banner.jpg'
                alt='music'
              />
            </Box>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp implementation='css' className={classes.isMobileWrap}>
        <Image
          layout='fill'
          objectFit='cover'
          src='/home-banner.jpg'
          alt='music'
        />
        <Box className={classes.mainTitle}>Music lesssons online for kids and adults</Box>
        <Box textAlign='center' pt={4} pb={3}>
          <Link href='/profiles'>
            <Button size='large' variant='contained' color='primary'>See all Teachers</Button>
          </Link>
        </Box>
      </Hidden>
    </>
  )
}

export default TopBanner
