import React from 'react'
import { Box, Text, ScrollView } from '../../components'

const PostList = () => {
  return (
    <ScrollView
      style={{
        paddingLeft: 20
      }}
    >
      {Array.from(Array(20))?.map(item => (
        <Text>PostList</Text>
      ))}
    </ScrollView>
  )
}

export default PostList
