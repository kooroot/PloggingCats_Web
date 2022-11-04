import { Flex, Box, Text, Image } from '@chakra-ui/react';

import f_logo from '../images/logo.png';

const Footer = () => {
  return (
    <Flex
      w="100%"
      h={100}
      alignItems="center"
      justifyContent="center"
      p={[4, 4, 2]}
      bgColor="#ff360a"
      color="#808080"
      m={0}
    >
      <Flex
        w={1200}
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Image w={100} src={f_logo} />
        <Box>
          <Text color="#000" fontWeight={'bold'} display={'inline'}>
            CONTACT&nbsp;&nbsp;|&nbsp;&nbsp;
          </Text>
          <Text color="#fff" display={'inline'} mr={20}>
            cromdin@gmail.com
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
