import React from 'react'
import { Box, Cover, Text, Touchable } from '..'
import { colors } from '../../styles/theme.json'

const Story = () => {
  return (
    <Touchable
      onPress={() => alert('test')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px"
    >
      <Cover
        width="100%"
        height="100%"
        image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-742415-3992656.jpg&fm=jpg"
      >
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between"
        >
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-742415-3992656.jpg&fm=jpg"
          />
          <Box height="50px" justiy="flex-end">
            <Text bold color="light">
              TaylorReis
            </Text>
            <Text color="light" variant="small">
              2 min ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}

export default Story
