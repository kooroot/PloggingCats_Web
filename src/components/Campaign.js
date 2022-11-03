import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Slide from './Slide';
import Work1 from '../images/logo.png';

import Campaign_01 from '../images/campaign/campaign_01.png';
import Campaign_02 from '../images/campaign/campaign_02.png';
import Campaign_03 from '../images/campaign/campaign_03.png';
import Campaign_04 from '../images/campaign/campaign_04.png';
import Campaign_05 from '../images/campaign/campaign_05.png';

const Campaign = () => {
  return (
    <Flex
      w={1200}
      h={950}
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
    >
      <Box
        border="2px solid #ff360a"
        w="160px"
        textAlign={'center'}
        py={3}
        borderRadius="50%"
        color="#ff360a"
        mt="30px"
      >
        CAMPAIGN
      </Box>

      <Flex
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Box w="90%" my="60px">
          <Slide />
        </Box>

        <Image w="200px" h="50px" mb="30px" src={'Work9'} alt="MISSION" />
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
          <Flex
            w="100%"
            alignItems="center"
            textAlign={'center'}
            flexDir="column"
            fontWeight={'bold'}
          >
            <Text fontWeight={'bold'}>
              플로깅 캣츠는 <br /> 홀더에겐 기부의 뿌듯함과 신뢰를,
              <br />
              환경 단체에겐 활동을 지속할 힘을 전달합니다.
              <br />
              <br />
              플로깅캣츠는
              <br />
              세계관과 네트워크를 점차 확장하여
              <br />
              개별 단체로 진행이 어려운 보다 큰 환경 활동을 주도해 나갈 것이며,
              <br />
              사회적으로 가치 있고 지속 가능한
              <br />
            </Text>
            <Text fontWeight={'bold'} color="#fff">
              IMPACT NFT PROJECT
            </Text>
            <Text fontWeight={'bold'}>와 그 문화를 만들어 갈 것입니다.</Text>
          </Flex>
        </Box>
        <Flex alignItems={'center'}>
          <Image
            w="300px"
            h="100px"
            mb="10px"
            src={'Work10'}
            alt="한국콘텐츠진흥원"
          />
          <Image
            w="100px"
            h="50px"
            mb="10px"
            src={'Work11'}
            alt="한국콘텐츠진흥원"
          />
        </Flex>

        <Text color="#666" fontSize="16">
          본 프로젝트는 한국콘텐츠진흥원의 '2022 콘텐츠 임팩트' 사업의 지원으로
          제작되었습니다.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Campaign;
