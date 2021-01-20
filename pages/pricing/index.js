import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core'
import { NextSeo } from 'next-seo'

const useStyles = makeStyles((theme) => ({
  content: {
    // marginBottom: theme.spacing(3),
    boxShadow: '0px 0px 20px 0px rgba(44, 101, 144, 0.1)',
    background: '#fff',
    borderRadius: 5,
    height: '100%',
    overflow: 'hidden'
  },
  contentInner: {
    padding: theme.spacing(3),
    width: '100%',
    textAlign: 'center'
  },
  basicTitle: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    width: '100%',
    textAlign: 'center',
    background: '#01c0a1',
    color: '#fff',
    fontSize: 20,
    fontWeight: 300,
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: '2px',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '18px 18px 0 18px',
      borderColor: '#01c0a1 transparent transparent transparent',
      left: '50%',
      transform: 'translateX(-50%) translateY(100%)',
    }
  },
  standardTitle: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    width: '100%',
    textAlign: 'center',
    background: '#50b5ff',
    color: '#fff',
    fontSize: 20,
    fontWeight: 300,
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: '2px',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '18px 18px 0 18px',
      borderColor: '#50b5ff transparent transparent transparent',
      left: '50%',
      transform: 'translateX(-50%) translateY(100%)',
    }
  },
  specialTitle: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    width: '100%',
    textAlign: 'center',
    background: '#ff6d6d',
    color: '#fff',
    fontSize: 20,
    fontWeight: 300,
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: '2px',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '18px 18px 0 18px',
      borderColor: '#ff6d6d transparent transparent transparent',
      left: '50%',
      transform: 'translateX(-50%) translateY(100%)',
    }
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: 'center'
  },
  oldPrice: {
    textDecoration: 'line-through',
    fontSize: 20,
    color: '#777',
    marginBottom: theme.spacing(3)
  },
  dol: {
    fontSize: 30,
    fontWeight: 600
  },
  priceWrap: {
    minHeight: 120,
    textAlign: 'center'
  }
}))

const BasicButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#01c0a1',
    '&:hover': {
      backgroundColor: '#009c83'
    }
  }
}))(Button)

const SpecialButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#ff6d6d',
    '&:hover': {
      backgroundColor: '#e64a4a'
    }
  }
}))(Button)

const PricingPage = () => {
  const classes = useStyles()
  const SEO = {
    title: 'Pricing',
    description: 'Some description Price'
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <Typography className={classes.title} variant='h4' component='h1' gutterBottom>Pricing</Typography>
        <Grid
          container
          direction='row'
          spacing={4}
        >
          <Grid item xs={12} sm={4}>
            <Box
              className={classes.content}
              display='flex'
              justify='center'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Box className={classes.basicTitle}>
                BASIC
              </Box>
              <Box className={classes.contentInner}>
                <Typography variant='h5'>$15/per lesson</Typography>
                <Box mb={5} pt={1} fontSize={18} color='text.secondary'>5 Lessons</Box>
                <Box className={classes.priceWrap}>
                  <Typography variant='h4'>
                    <Box component='span' fontSize={22}>$</Box>75
                  </Typography>
                </Box>
                <BasicButton size='large' variant='contained' color='primary' fullWidth>
                  Choose
                </BasicButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className={classes.content}
              display='flex'
              justify='center'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Box className={classes.standardTitle}>STANDARD</Box>
              <Box className={classes.contentInner}>
                <Typography variant='h5'>$12/per lesson</Typography>
                <Box mb={5} pt={1} fontSize={18} color='text.secondary'>10 Lessons</Box>
                <Box className={classes.priceWrap}>
                  <Typography variant='h3'>
                    <Box component='span' className={classes.dol}>$</Box>120
                  </Typography>
                  <Box className={classes.oldPrice}>$150</Box>
                </Box>
                <Button size='large' variant='contained' color='primary' fullWidth>
                  Choose
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className={classes.content}
              display='flex'
              justify='center'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Box className={classes.specialTitle}>SPECIAL</Box>
              <Box className={classes.contentInner}>
                <Typography variant='h5'>$10/per lesson</Typography>
                <Box mb={5} pt={1} fontSize={18} color='text.secondary'>30 Lessons</Box>

                <Box className={classes.priceWrap}>
                  <Typography variant='h4'>
                    <Box component='span' fontSize={22}>$</Box>250
                  </Typography>
                  <Box className={classes.oldPrice}>$375</Box>
                </Box>

                <SpecialButton size='large' variant='contained' color='primary' fullWidth>
                  Choose
                </SpecialButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default PricingPage
