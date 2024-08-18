import React from 'react';
import { StatusBar } from 'react-native';

import { Box, Title, Text, Spacer, Button, Input } from '../../components';

const SingIn = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LOOKUP
        </Title>
        <Spacer size="40px" />
        <Title bold>SignIn my account.</Title>
        <Spacer size="50px" />

        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block>
          <Text color="light">SignIn into my account</Text>
        </Button>
        <Spacer size="29px" />
        <Text underline color="gray50" onPress={() => alert('test create')}>
          Create new account
        </Text>
        <Spacer size="70px" />
      </Box>
    </>
  );
};

export default SingIn;
