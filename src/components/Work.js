import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/work/work_01.png';
import Work2 from '../images/work/work_02.png';
import Work3 from '../images/work/work_03.png';
import Work4 from '../images/work/work_04.png';
import Work5 from '../images/work/work_05.png';
import Work7 from '../images/work/work_07.png';
import Work9 from '../images/work/work_09.png';
import Work10 from '../images/work/work_10.png';
import Work12 from '../images/work/work_12.png';

const Work = () => {
  return (
    <Flex
      id="THE WORK WE DO"
      w={1200}
      h={1000}
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
        mt="30px"
      >
        THE WORK WE DO
      </Box>
      <Flex w="80%"  justifyContent="flex-end">
        <Flex w="40%" position={"relative"} justifyContent="flex-start" alignItems="flex-start">
          <Image
            w={400}
            position={"absolute"}
            left="-120px"
            src={Work1}
          />
        </Flex>

        <Box w="60%">
          <Image
            w="90%"
            my="10px"
            src={Work2}
            alt="LET'S SAVE PLANET! JOIN THE PLOGGING CATS"
          />
          <Text fontWeight={'bold'} ml="30px">
            플로깅캣츠는 환경보호를 위해 후원자와 활동가를 이어줍니다.
            <br />
            환경문제에 관심있는 후원자가 플로깅캣츠가 발행하는 '멸종위기동물
            NFT'를 구입하면 그 금액을 모아 제휴 환경 단체에 기부하고 함께
            플로깅을 진행합니다.
          </Text>
          <Image w="100%" src={Work3} mb="40px" />
          <Image w="40%" mb="10px" src={Work4} alt="WHY NFT?" />
          <Text fontWeight={'bold'} ml="30px">
            NFT 프로젝트로 후원금을 모으면 블록체인의 특성상 후원금 흐름의
            투명성이 확보되고, 후원자 & 활동가 커뮤니티 형성을 통해 새로운 기부
            문화, 환경 운동을 형성하는데 유리합니다.
          </Text>
          <Image w="100%" mb="10px" src={Work5} alt="WHY NFT?" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Work;
