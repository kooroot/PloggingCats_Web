import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
import Logo from "../images/logo.png"
import Insta from "../images/icon/insta.png"
import Twitter from "../images/icon/twitter.png"
import Kakaotalk from "../images/icon/kakaotalk.png"
import Discord from "../images/icon/discord.png"

const instagramURL = "https://www.instagram.com/ploggingnft/";
const twitterURL = "https://twitter.com/Plogging_Cats";
const discordURL = "https://discord.gg/JV4whBWNPs";
const kakaoURL = "https://testnets.opensea.io/collection/projectlion-nft";

const Header = () => {
  // const scrollLink = [{"text":"플로킹캣츠 소개"}, {"text":"하는일"}, {"text":"시즌 캠페인"}];
  const scrollLink = ["플로킹캣츠 소개", "하는일", "Season"];
  return (
    <Flex
      pos="fixed"
      w="100%"
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
      <Flex
        fontWeight="bold"
        fontSize="lg"
        cursor="pointer"
        w="50%"
        >
        <a id="h_logo"
        >
          <Image
            w={100}
            src={Logo}
            alt="LOGO"
          />
          <Box
            color="#f3ebcb"
            fontSize={34}
          >PLOGGING CATS</Box>
        </a>
      </Flex>
      <Flex
        w="38%"
        justifyContent="center"
        alignItems="center"
      >
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v} spy={true} smooth={true} offset={-113}>
              <Text
              display="inline-block"
              size={["xs", "sm", "md"]}
              p={4}
              mr={[0, 4]}
              color='#f3ebcb'
              fontWeight='bold'
              borderRadius='md'
              fontSize={14}
              cursor="pointer"
              >
                {v}
              </Text>
            </ScrollLink>
          );
        })}
      </Flex>
      <Flex
        w="12%"
        justifyContent="space-between"
        >
        <a href={instagramURL}>
          <Image
            w={7}
            src={Insta}
            alt="Insta"
          />
        </a>
        <a href={twitterURL}>
        <Image
            w={7}
            src={Twitter}
            alt="Twitter"
          />
        </a>
        <a href={kakaoURL}>
        <Image
            w={7}
            src={Kakaotalk}
            alt="Kakaotalk"
          />
        </a>
        <a href={discordURL}>
        <Image
            w={8}
            src={Discord}
            alt="Discord"
          />
        </a>
      </Flex>
    </Flex>
  );
};

export default Header;