import React from 'react'
import { Box, Text } from '../../components'

import Header from '../../components/Header'
import StoryList from '../../components/Story/list'

const Feed = () => {
  return (
    <Box background="light">
          <Header title={"Explore"} bold />
          <StoryList />
    </Box>
  )
}

export default Feed
