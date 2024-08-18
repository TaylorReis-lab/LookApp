import React from 'react'
import { StatusBar } from 'react-native'

import { Box, Title, Text, Spacer, Button, Input } from '../../components'

const SingUp = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold>Create new account.</Title>
        <Spacer />
        <Text color="gray50">Enter your details below:</Text>
        <Spacer size="50px" />

        <Input placeholder="Name" />
        <Spacer />
        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block>
          <Text color="light">Create new account</Text>
        </Button>
        <Spacer size="29px" />
        <Text underline color="gray50" onPress={() => alert('test create')}>
          Back to signIn
        </Text>
        <Spacer size="70px" />
      </Box>
    </>
  )
}

export default SingUp
