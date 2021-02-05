import { Button, Box } from '@material-ui/core'
import { getSession, signIn, signOut } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const AccountPage = ({ session }) => {
  const signInButtonNode = () => {
    if (session) {
      return false
    }

    return (
      <Box textAlign='center'>
        <Link href='/api/auth/signin'>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign In
          </Button>
        </Link>
      </Box>
    )
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false
    }

    return (
      <Box textAlign='center'>
        <Link href='/api/auth/signout'>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    )
  };

  if (!session) {
    return (
      <Box>
        <Box>
          {signOutButtonNode()}
          {signInButtonNode()}
        </Box>
        <Box textAlign='center' pt={3} fontSize={18}>You aren't authorized to view this page</Box>

        <Box>
          <h3>API Example</h3>
          <p>The examples below show responses from the example API endpoints.</p>
          <p><em>You must be signed in to see responses.</em></p>
          <h2>Session</h2>
          <p>/api/examples/session</p>
          <iframe src="/api/examples/session"/>
          <h2>JSON Web Token</h2>
          <p>/api/examples/jwt</p>
          <iframe src="/api/examples/jwt"/>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Box>
        {signOutButtonNode()}
        {signInButtonNode()}
      </Box>
      <Box>Hello world</Box>
    </>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  return {
    props: {
      session
    }
  }
};

export default AccountPage
