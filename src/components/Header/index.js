import React from 'react'
import { Box, Title, Touchable } from '../../components'
import { SafeAreaView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/theme.json'

const Header = ({ title }) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
      <Box
        background="light"
        fluid
        height="100px"
        justify="center"
        border={`1px solid ${colors.muted}50`}
      >
        <SafeAreaView
          style={{
            flexDirection: 'row'
          }}
        >
          <Touchable
            width="80px"
            justufy="center"
            alight="center"
            onPress={() => alert('test')}
          >
            <Icon name="menu" size={30} color={`${colors.dark}`} />
          </Touchable>
          <Box align="center" justify="center">
            <Title>{title}</Title>
          </Box>
          <Touchable width="80px"></Touchable>
        </SafeAreaView>
      </Box>
    </>
  )
}

export default Header
