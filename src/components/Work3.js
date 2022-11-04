import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/logo.png';

import Work5 from '../images/work/work_05.png';
import Work8 from '../images/work/work_08.png';
import Work9 from '../images/work/work_09.png';
import Work10 from '../images/work/work_10.png';
import Work11 from '../images/work/work_11.png';
import Work12 from '../images/work/work_12.png';

const Work3 = () => {
  return (
    <Flex
      w={1200}
      h={950}
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
      backgroundColor="#ff360a"
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Image w="400px" h="50px" mb="30px" src={Work8} alt="SEASONAL SYSTEM" />
        <Box w="80%" mb="60px">
          <Text
            fontWeight={'bold'}
            textAlign={'center'}
            color="#faecc9"
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
            color="#faecc9"
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
            <Box>
              <Text fontWeight={'bold'} color="#fff" display={"inline"}>
                IMPACT NFT PROJECT
              </Text>
              <Text fontWeight={'bold'} display={"inline"}> 와 그 문화를 만들어 갈 것입니다.</Text>
            </Box>
          </Flex>
        </Box>
        <Flex alignItems={'center'}>
          <Image
            w="300px"
            h="100px"
            mb="10px"
            src={Work10}
            alt="한국콘텐츠진흥원"
          />
          <Image
            w="100px"
            h="50px"
            mb="10px"
            src={Work11}
            alt="한국콘텐츠진흥원"
          />
        </Flex>

        <Text color="#454545" fontSize="16">
          본 프로젝트는 한국콘텐츠진흥원의 '2022 콘텐츠 임팩트' 사업의 지원으로
          제작되었습니다.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Work3;
