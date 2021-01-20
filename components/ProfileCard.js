import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button,
  Typography,
  Avatar,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    width: '32%',
    boxShadow: '0px 0px 20px 0px rgba(44, 101, 144, 0.1)',
    background: '#fff',
    borderRadius: 5,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}))

function ProfileCard ({ profile }) {
  const { API_URL } = process.env
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {profile.avatar && (
        <Avatar
          className={classes.avatar}
          src={API_URL + profile.avatar.url}
          alt={profile.profile_name}
        />
      )}
      <Typography
        component='h5'
        variant='h5'
        color='textPrimary'
        gutterBottom
      >
        {profile.name}
      </Typography>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
        spacing={2}
      >
        <Grid item sm={6}>
          <Box
            pt={3}
            component='div'
            textAlign='center'
            color='text.secondary'
            fontSize={16}
          >
            Experience
          </Box>
          <Box
            fontSize={18}
            color='textPrimary'
            textAlign='center'
            mb={3}
          >
            {profile.experience}<Box component='span' fontSize={14}> years</Box>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box
            pt={3}
            component='div'
            textAlign='center'
            color='text.secondary'
            fontSize={16}
          >
            Instrument
          </Box>
          {profile.instrument && (
            <Box
              fontSize={17}
              color='textPrimary'
              textAlign='center'
              mb={3}
            >
              {profile.instrument.type}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <Link href='/profile/[id]' as={`/profile/${profile.id}`}>
            <Button size='medium' variant='contained' color='primary' fullWidth>
              See Profile
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileCard
