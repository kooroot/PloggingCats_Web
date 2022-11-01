import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Work = () => {
  return (
    <Flex
      id="CONCEPT"
      maxW={1920}
      minW={1100}
      w="100%"
      h="60vh"
      mx={'auto'}
      alignItems="center"
      justifyContent="flex-start"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      flexDir="column"
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
      <Flex mt="8%" ml="15%" w="80%" maxW={1000} justifyContent="flex-end">
        <Box w="60%">
          {/* LETS SAVE PLANET! JOIN THE PLOGGING CATS */}
          <Text fontWeight={'bold'}>
            플로깅캣츠는 환경보호를 위해 후원자와 활동가를 이어줍니다.<br />
            환경문제에 관심있는 후원자가 플로깅캣츠가 발행하는 '멸종위기동물
            NFT'를 구입하면 그 금액을 모아 제휴 환경 단체에 기부하고 함께
            플로깅을 진행합니다.
          </Text>
          {/* WHY NFT */}
          <Text fontWeight={'bold'}>
            NFT 프로젝트로 후원금을 모으면 블록체인의 특성상 후원금 흐름의
            투명성이 확보되고, 후원자 & 활동가 커뮤니티 형성을 통해 새로운 기부
            문화, 환경 운동을 형성하는데 유리합니다.
          </Text>
        </Box>
      </Flex>
      {/* HOLDER BENEFIT */}
      <Flex mt="8%" w="100%" maxW={1920} justifyContent="center">
        <Box w="30%" mr="40px">
          <Text fontWeight={'bold'} textAlign={'center'} color="#fff" fontSize="20px" mb="20px">
            인터뷰 및 소개
          </Text>
          <Text fontWeight={'bold'}>
            알비노 세이버와 시즌 레전드(최대 후원자)는 본인이 원할 경우 인터뷰를 통해
            공식 SNS 및 커뮤니티에 소개됩니다.
            환경보호 활동에 대한 자부심을 가지세요!
          </Text>
        </Box>
        <Box w="20%" mr="40px">
          <Text fontWeight={'bold'} textAlign={'center'} color="#fff" fontSize="20px" mb="20px">
            알비노 세이버(1회성)
          </Text>
          <Text fontWeight={'bold'}>
            한 시즌에 알비노가 단 1마리 존재합니다.
            민팅 기간 종료 후 홀더 대상 추첨을 통해 단 1명의 알비노 세이버를 선정하며,
            선정된 알비노 세이버가 플로깅 활동 후 SNS 및 커뮤니티에 인증을 완료하면 알비노 NFT 에어드롭과 함께 해당 시즌 NFT 판매금의 5%의 당첨금을 지급합니다.
            알비노를 구출해보세요!
          </Text>
        </Box>
        <Box w="30%">
          <Text fontWeight={'bold'} textAlign={'center'} color="#fff" fontSize="20px" mb="20px">
            각종 행사 및 리워드 지급
          </Text>
          <Text fontWeight={'bold'}>
            로드맵에 따른 셀럽 초청 행사, 플로깅 페스티벌, 브랜드 협업 행사, 해외 환경 투어 등에 초청하고 굿즈 리워드 등을 제공해 드립니다.
            멸종위기동물을 많이 구출한(보유한) 홀더들이 당첨 확률이 높으니 열심히 구출해주세요!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Work;
