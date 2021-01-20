import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Router from 'next/router'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { Container, Typography, Grid, Box, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NextSeo } from 'next-seo'
import FormDialog from '../../components/FormDialog'

const useStyles = makeStyles((theme) => ({
  content: {
    boxShadow: '0px 0px 20px 0px rgba(44, 101, 144, 0.1)',
    background: '#fff',
    borderRadius: 5,
    padding: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}))

function Profile ({profile}) {
  const classes = useStyles()
  const { API_URL } = process.env

  const SEO = {
    title: `Music School | ${profile.name}`,
    description: 'Some description About School'
  }

  // Open Form
  const [isOpenForm, setIsOpenForm] = useState(false)
  const handleCloseForm = () => {
    setIsOpenForm(false)
  }
  function showForm () {
    setIsOpenForm(true)
  }

  return (
    <>
      <NextSeo {...SEO} />
      <FormDialog
        handleCloseForm={handleCloseForm}
        isOpenForm={isOpenForm}
      />
      <Container>
        <Grid
          container
          direction='row'
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <Button
              size='medium'
              variant='text'
              color='primary'
              onClick={() => Router.back()}>{'< '}Back to Home
            </Button>
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
                    Price
                  </Box>
                  <Box
                    fontSize={18}
                    color='textPrimary'
                    textAlign='center'
                    mb={3}
                  >
                    15<Box component='span' fontSize={14}>$</Box>
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
                <Grid item xs={12} sm={12}>
                  <Link href='/pricing'>
                    <Button size='medium' variant='contained' color='primary' fullWidth>
                      Book Now
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button size='medium' variant='outlined' color='primary' fullWidth  onClick={setIsOpenForm}>
                    Ask a Question
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box className={classes.content}>
              <Typography variant='h6' component='div'>Bio</Typography>
              <ReactMarkdown source={profile.bio} />
            </Box>
          </Grid>
        </Grid>
        
      </Container>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${publicRuntimeConfig.API_URL}/profiles/${id}`)
  const data = await res.json()

  return {
    props: {
      profile: data
    }
  }
}

export default Profile