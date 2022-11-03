import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

import Work1 from '../images/logo.png';

import Work5 from '../images/work/work_05.png';
import Work6 from '../images/work/work_06.png';
import Work7 from '../images/work/work_07.png';
import Work9 from '../images/work/work_09.png';
import Work10 from '../images/work/work_10.png';
import Work12 from '../images/work/work_12.png';

const Work2 = () => {
  return (
    <Flex
      w={1200}
      h={850}
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      flexDir="column"
      backgroundColor="#ff360a"
    >
      <Image w="100%" h="400" mb="10px" src={Work6} />
      <Flex
        w="1000"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Image w="400px" h="50px" mb="50px" src={Work7} alt="Holder Benefit" />
        <Flex flexDir="row" alignItems="flex-start" justifyContent="center">
          <Box w="35%" mr="20px">
            <Text
              fontWeight={'bold'}
              textAlign={'center'}
              color="#fff"
              fontSize="20px"
              mb="20px"
            >
              인터뷰 및 소개
            </Text>
            <Text fontWeight={'bold'} p="10px">
              알비노 세이버와 시즌 레전드(최대 후원자)는 본인이 원할 경우
              인터뷰를 통해 공식 SNS 및 커뮤니티에 소개됩니다. 환경보호 활동에
              대한 자부심을 가지세요!
            </Text>
          </Box>
          <Box w="30%" mr="20px">
            <Text
              fontWeight={'bold'}
              textAlign={'center'}
              color="#fff"
              fontSize="20px"
              mb="20px"
            >
              알비노 세이버(1회성)
            </Text>
            <Text fontWeight={'bold'}p="10px">
              한 시즌에 알비노가 단 1마리 존재합니다. 민팅 기간 종료 후 홀더
              대상 추첨을 통해 단 1명의 알비노 세이버를 선정하며, 선정된 알비노
              세이버가 플로깅 활동 후 SNS 및 커뮤니티에 인증을 완료하면 알비노
              NFT 에어드롭과 함께 해당 시즌 NFT 판매금의 5%의 당첨금을
              지급합니다. 알비노를 구출해보세요!
            </Text>
          </Box>
          <Box w="35%">
            <Text
              fontWeight={'bold'}
              textAlign={'center'}
              color="#fff"
              fontSize="20px"
              mb="20px"
            >
              각종 행사 및 리워드 지급
            </Text>
            <Text fontWeight={'bold'} p="10px">
              로드맵에 따른 셀럽 초청 행사, 플로깅 페스티벌, 브랜드 협업 행사,
              해외 환경 투어 등에 초청하고 굿즈 리워드 등을 제공해 드립니다.
              멸종위기동물을 많이 구출한(보유한) 홀더들이 당첨 확률이 높으니
              열심히 구출해주세요!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Work2;
