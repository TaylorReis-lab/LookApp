import React from 'react'
import { Box, Text, ScrollView } from '../../components'
import Story from '.'

const StoryList = () => {
  return (
    <Box fluid height="260px">
      <Box row fluid justify="space-between" hasPadding height="60px">
        <Text bold color="dark">
          Stories
        </Text>
        <Text color="danger">Show All</Text>
      </Box>
      <ScrollView
        horizontal
        style={{
          paddingLeft: 20
        }}
      >
        {Array.from(Array(20))?.map(item => (
          <Story />
        ))}
      </ScrollView>
    </Box>
  )
}

export default StoryList
