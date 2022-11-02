import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
import Logo from '../images/logo.png';
import Insta from '../images/icon/insta.png';
import Twitter from '../images/icon/twitter.png';
import Telegram from '../images/icon/telegram.png';

const instagramURL = 'https://www.instagram.com/ploggingnft/';
const twitterURL = 'https://twitter.com/Plogging_Cats';
const telegramURL = 'https://t.me/PloggingCats';

const Header = () => {
  const scrollLink = ['CONCEPT', 'THE WORK WE DO', 'ROAD MAP', 'CAMPAIGN'];
  return (
    <Flex
      pos="fixed"
      w="100%"
      minW={1100}
      h="113px"
      top="0"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      shadow="md"
      backgroundColor="#ff360a"
      zIndex={1}
      flexDir="row"
    >
      <Flex fontWeight="bold" fontSize="lg" w="50%">
        <a id="h_logo">
          <ScrollLink to={'Title'} spy={true} smooth={true} offset={-113}>
            <Image w={100} src={Logo} alt="LOGO" />
          </ScrollLink>

          <Box color="#f3ebcb" fontSize={34}>
            <ScrollLink to={'Title'} spy={true} smooth={true} offset={-113}>
              PLOGGING CATS
            </ScrollLink>
          </Box>
        </a>
      </Flex>
      <Flex w="38%" justifyContent="center" alignItems="center">
        {scrollLink.map(v => {
          return (
            <ScrollLink to={v} spy={true} smooth={true} offset={-113}>
              <Text
                display="inline-block"
                size={['xs', 'sm', 'md']}
                p={[4, 0]}
                mr={[0, 4]}
                color="#f3ebcb"
                borderRadius="md"
                fontSize={14}
                cursor="pointer"
              >
                {v}
              </Text>
            </ScrollLink>
          );
        })}
      </Flex>
      <Flex w="120px" justifyContent="space-between">
        <a href={instagramURL}>
          <Image w={7} src={Insta} alt="Insta" />
        </a>
        <a href={twitterURL}>
          <Image w={7} src={Twitter} alt="Twitter" />
        </a>
        <a href={telegramURL}>
          <Image w={7} src={Telegram} alt="Kakaotalk" />
        </a>
      </Flex>
    </Flex>
  );
};

export default Header;
