import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/logo.png';

import Work9 from '../images/work/work_09.png';
import Work12 from '../images/work/work_12.png';

const RoadMap = () => {
  return (
    <Flex
      id="ROAD MAP"
      maxW={1920}
      minW={1100}
      w="100%"
      h={1600}
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      flexDir="column"
      backgroundColor="#ff360a"
    >
      <Box
        border="2px solid #fff"
        w="160px"
        textAlign={'center'}
        py={3}
        borderRadius="50%"
        color="#fff"
        my="30px"
      >
        ROAD MAP
      </Box>
      <Image w="200px" h="50px" mb="30px" src={Work9} alt="LEVEL.1" />
      <Image w="80%" mb="30px" src={Work12} />
      <Image w="40%" mb="30px" src={Work1} />
    </Flex>
  );
};

export default RoadMap;
