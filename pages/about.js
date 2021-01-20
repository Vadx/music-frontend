import { Container, Typography } from '@material-ui/core'
import { NextSeo } from 'next-seo'

const AboutPage = () => {
  const SEO = {
    title: 'About School',
    description: 'Some description About School'
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <Typography variant='h4' component='h1' gutterBottom>Teach process</Typography>
      </Container>
    </>
  )
}

export default AboutPage
