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
      h={2300}
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
        <Box w="100%" my="60px">
          <Slide />
        </Box>
        <Box w="100%" h="500px" ml="80px" pl="30px" position={'relative'}>
          <Box>
            <Image
              w="60%"
              h="150px"
              mb="20px"
              src={Campaign_02}
              alt="PARTNERSHIP OF SEASON 1 DIPHDA JEJU"
            />
            <Text w="50%" ml="20px">
              플로깅캣츠가 후원할 시즌1 제휴 단체는 Sea U Tommorrow라는 슬로건
              아래 제주에서 제주에서 해양 쓰레기 수거, 소상공인과 연계한 환경
              운동, 해양 쓰레기 데이터화 활동을 지속해오고 있는 '디프다
              제주'입니다. 2018년 창립이래 4년 째 활동을 이어 오고 있지만
              자원봉사만으로는 원활한 운영에 한계가 있어 플로깅캣츠 여러분들의
              후원과 지지가 필요합니다!
            </Text>
            <a
              href="https://diphdajeju.imweb.me/"
              target="_blank"
              className="campaign_link"
            >
              디프다 제주 활동 보러가기 &gt;
            </a>
          </Box>
          <Image
            w="40%"
            position={'absolute'}
            top="0px"
            right="30px"
            src={Campaign_03}
            alt="PARTNERSHIP OF SEASON 1 DIPHDA JEJU"
          />
        </Box>
        <Box w="100%" ml="80px" pl="30px" position={'relative'}>
          <Box>
            <Image w="40%" mb="40px" src={Campaign_04} alt="ABOUT MINTING" />
            <Box className="camp_box">
              <Text className="camp_title">민팅 기간</Text>
              <Text className="camp_text">
                2022. 11. 8. (화) ~ 11. 30. (수) 약 3주
              </Text>
            </Box>

            <Box className="camp_box">
              <Text className="camp_title">기반 크립토</Text>
              <Text className="camp_text">폴리곤 (Polygon) / MATIC</Text>
            </Box>

            <Box className="camp_box">
              <Text className="camp_title">민팅 시작가</Text>
              <Text className="camp_text">25 MATIC</Text>
            </Box>

            <Box className="camp_box">
              <Text className="camp_title">총 민팅 수량</Text>
              <Text className="camp_text" display={'inline'}>
                3,000개&nbsp;&nbsp;
              </Text>
              <Text className="camp_subtext" display={'inline'}>
                * 판매 2,640개 + 홍보용 팀 물량 360개 (12%)
              </Text>
            </Box>

            <Box className="camp_box">
              <Text className="camp_title">최소 활동 모금액</Text>
              <Text className="camp_text">300만원</Text>
              <Text className="camp_list">
                &nbsp;&nbsp;NFT 총 판매금액이 최소 활동 모금액 이상일 때 제휴
                단체에 기부금 전달
              </Text>
              <Text className="camp_list">
                &nbsp;&nbsp;300만원 미만 시 다음 시즌으로 기부금(모금액의 40%)
                이월, 해당 제휴 단체 추가 시즌 진행
              </Text>
              <Text className="camp_list">
                &nbsp;&nbsp;단, 최소 활동 모금액에 상관없이 해당 시즌 알비노
                세이버 추첨 및 선정, 당첨금 지급은 진행
              </Text>
            </Box>
          </Box>
          <a href="#">
            <Image
              w="40%"
              mb="40px"
              position={'absolute'}
              top="150px"
              right="110px"
              src={Campaign_05}
              alt="ABOUT MINTING"
            />
          </a>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Campaign;
