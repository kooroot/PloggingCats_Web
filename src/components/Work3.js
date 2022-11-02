import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/logo.png';

import Work5 from '../images/work/work_05.png';
import Work7 from '../images/work/work_07.png';
import Work9 from '../images/work/work_09.png';
import Work10 from '../images/work/work_10.png';
import Work12 from '../images/work/work_12.png';

const Work3 = () => {
  return (
    <Flex
      id="THE WORK WE DO"
      maxW={1920}
      minW={1100}
      w="100%"
      h={850}
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      flexDir="column"
      backgroundColor="#ff360a"
    >
      <Flex
        w="100%"
        maxW={1920}
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Image w="400px" h="50px" mb="30px" src={Work7} alt="SEASONAL SYSTEM" />
        <Box w="80%" mb="60px">
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            color="#fff"
            fontSize="28px"
            mb="20px"
          >
            플로깅캣츠 프로젝트는 시즌제로 운영되며, 시즌마다 새로운 활동가(제휴
            단체)와 함께 새로운 멸종위기동물 NFT가 민팅됩니다.
          </Text>
          <Flex w="100%" alignItems="center" flexDir="column">
            <Text fontWeight={'bold'}>
              • 시즌 주기 : 분기별 1회, 민팅 기간 3~4주
            </Text>
            <Text fontWeight={'bold'}>
              • 시즌 멸종위기동물 : 후보 리스팅 후 홀더 투표를 통해 다음 시즌
              멸종위기동물 선정
            </Text>
            <Text fontWeight={'bold'}>
              • 시즌 제휴 단체 : 활발하게 활동 중인 환경단체 중 NFT 프로젝트에
              우호적인 단체 섭외
            </Text>
          </Flex>
        </Box>

        <Image w="200px" h="50px" mb="30px" src={Work9} alt="MISSION" />
        <Box w="80%" mb="60px">
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            color="#fff"
            fontSize="28px"
            mb="20px"
          >
            전 세계 환경 단체를 잇는 플로깅캣츠 유니온!
          </Text>
          <Flex w="100%" alignItems="center" flexDir="column">
            <Text fontWeight={'bold'}>
              플로깅 캣츠는 홀더에겐 기부의 뿌듯함과 신뢰를, 환경 단체에겐
              활동을 지속할 힘을 전달합니다.
            </Text>
            <Text fontWeight={'bold'}>
              플로깅캣츠는 세계관과 네트워크를 점차 확장하여
            </Text>
            <Text fontWeight={'bold'}>
              개별 단체로 진행이 어려운 보다 큰 환경 활동을 주도해 나갈 것이며,
              사회적으로 가치 있고 지속 가능한
            </Text>
            <Text fontWeight={'bold'} color="#fff">
              IMPACT NFT PROJECT
            </Text>
            <Text fontWeight={'bold'}>와 그 문화를 만들어 갈 것입니다.</Text>
          </Flex>
        </Box>
        <Image
          w="200px"
          h="50px"
          mb="10px"
          src={Work10}
          alt="한국콘텐츠진흥원"
        />
        <Text color="#666" fontSize="16">본 프로젝트는 한국콘텐츠진흥원의 '2022 콘텐츠 임팩트' 사업의 지원으로 제작되었습니다.</Text>
      </Flex>
    </Flex>
  );
};

export default Work3;
