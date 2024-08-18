import React from 'react';

import { Box, Title, Button, Text, Spacer } from '../../components';

const Home = () => {
  return (
    <Box justify="center" hasPadding align="center" background="dark">
      <Box justify="center" align="center">
        <Title color="light" variant="big" bold>
          LOOKAPP
        </Title>
        <Spacer />
        <Text align="center" spacing="0px 40px">
          Stay on top of the fashion world and buy your favorite looks.
        </Text>
      </Box>
      <Box align="center" justify="flex-end">
        <Button block>
          <Text color="light">SigIn my account</Text>
        </Button>
        <Spacer size="29px" />
        <Text underline color="light" onPress={() => alert('test create')}>
          Create new account
              </Text>
              <Spacer size="70px" />
      </Box>
    </Box>
  );
};

export default Home;
