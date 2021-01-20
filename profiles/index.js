import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import ProfileCard from '../../components/ProfileCard'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box, List, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  titleWrap: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  }
}))

const Profiles = ({ profiles, page, numberOfProfiles }) => {
  const classes = useStyles()
  const router = useRouter()
  const lastPage = Math.ceil(numberOfProfiles / 6)

  return (
    <>
      <Box className={classes.titleWrap}>
        <Typography variant='h4' component='h1' gutterBottom>Teachers</Typography>
      </Box>
      <Container>
        <List className={classes.list}>
          {profiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </List>
        <Grid
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={2}
          container
        >
          <Grid item>
            <Button
              onClick={() => router.push(`/profiles?page=${page - 1}`)}
              disabled={page <= 1}
              variant='text'
              color='default'
            >Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => router.push(`/profiles?page=${page + 1}`)}
              disabled={page >= lastPage}
              variant='text'
              color='default'
            >Next
            </Button>
          </Grid>
        </Grid>
        <Box mb={5} />
      </Container>
    </>
  )
}

export async function getServerSideProps ({ query: { page = 1 } }) {
  const { API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 6

  const numberOfProfilesResponse = await fetch(`${API_URL}/profiles/count`)
  const numberOfProfiles = await numberOfProfilesResponse.json()

  const res = await fetch(`${API_URL}/profiles?_limit=6&_start=${start}`)
  const data = await res.json()

  return {
    props: {
      profiles: data,
      page: +page,
      numberOfProfiles
    }
  }
}

export default Profiles
