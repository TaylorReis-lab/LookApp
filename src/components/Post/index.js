import React from 'react'
import { Box, Cover, Spacer, Text, Touchable } from '../../components'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

const Post = () => {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover
          image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-742415-3992656.jpg&fm=jpg"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            TaylorReis
          </Text>
          <Text variant="small">2 min ago</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Cover
        image="https://static.vecteezy.com/ti/vetor-gratis/p1/9169455-ceu-dourado-por-do-sol-na-costa-natureza-paisagem-vetor.jpg"
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="10px"
      />
      <Box row fluid align="center">
        {Array.from(Array(3))?.map(item => (
          <Cover
            circle
            width="30px"
            height="30px"
            border={`1px solid ${colors.light}`}
            spacing="0px -15px 0px 0px"
            image="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?cs=srgb&dl=pexels-kebs-visuals-742415-3992656.jpg&fm=jpg"
          />
        ))}
        <Text variant="small" spacing="0px 20px">
          Liked by 10,098
        </Text>
        <Box row>
          <Icon name="life" />
          <Icon name="life" />
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  )
}

export default Post
