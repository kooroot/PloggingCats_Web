import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
import Intro from "../images/intro.png";

const Title = () => {
  return (
    <Flex
      id="플로킹캣츠 소개"
      w="100%"
      alignItems="center"
    >
      <Image
        maxW={1920}
        w="100%"
        src={Intro}
        m={[0, "auto"]}
      />
    </Flex>
  );
};

export default Title;