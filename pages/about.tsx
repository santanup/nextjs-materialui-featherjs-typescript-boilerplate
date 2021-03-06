import React, { ReactElement, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import { User } from '../interfaces/user'

interface AboutProps {
  user: User
}

export default function About({ user }: AboutProps): ReactElement {
  const [value, setValue] = useState<number>(0);

  if (typeof user.org !== 'string') {
    console.log(user.org.name)
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
