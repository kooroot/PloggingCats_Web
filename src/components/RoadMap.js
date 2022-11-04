import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/logo.png';

import Work9 from '../images/work/work_12-1.png';
import Work12 from '../images/work/work_12.png';
import Work13 from '../images/work/work_13.png';

const RoadMap = () => {
  return (
    <Flex
      id="ROAD MAP"
      w={1200}
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
      <Image w="200px" h="60px" mb="30px" src={Work9} alt="LEVEL.1" />
      <Image w="80%" mb="30px" ml="166px" src={Work12} />
      <Image w={800} mb="30px" src={Work13} />
    </Flex>
  );
};

export default RoadMap;
