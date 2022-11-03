import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Concept = () => {
  return (
    <Flex
      id="CONCEPT"
      w={1200}
      h={600}
      mx={'auto'}
      alignItems="flex-start"
      justifyContent="flex-start"
      backgroundImage={'url("./intro.png")'}
      backgroundRepeat="round"
      backgroundSize={'contain'}
      flexDir="column"
    >
      <Flex className="inner" flexDir="column" alignItems="center">
        <Box
          border="2px solid #fff"
          w="120px"
          textAlign={'center'}
          py={3}
          borderRadius="50%"
          color="#fff"
          mt="30px"
        >
          CONCEPT
        </Box>
        <Flex w="500px" ml="300px" justifyContent="center" alignItems="center">
          <Box className="text_box" mt="160">
            <Text fontWeight={'bold'}>
              트래쉬 타운에 사는 길고양이 캐치(Catchy)에게 쓰레기로 덮인 세상은
              너무나 당연하고 자연스러웠어요. 그러던 어느 날, 캐치는 우연히
              쓰레기 더미 속에서 죽어가던 멸종위기동물을 구출하고 중대한 비밀을
              듣게 됐어요.
              <br />
              쓰레기를 주워 세상이 깨끗해지면 더 많은 멸종위기동물들을 살릴 수
              있고 마침내 청정자연인 그린랜드를 찾을 수 있다는 거였죠!
              <br />
              캐치도 아주 어릴 적 잠깐 보았던 깨끗한 그린랜드가 떠올랐어요.
              파아란 하늘과 투명한 바다, 밤하늘에 별이 가득 빛나던 그곳이 너무나
              그리워진 캐치는 고양이 친구들을 모아 '플로깅캣츠'를 만들고 다 함께
              그린랜드를 찾기로 했어요.
            </Text>
            <Text fontWeight={'bold'} color="#fff" fontSize="20px" mt="20px">
              자, 여러분도 지금 당장 '플로깅캣츠'의 고양이 단원이 되어
              <br />
              멸종위기동물을 구하고 그린랜드를 찾아 떠나보아요!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Concept;
