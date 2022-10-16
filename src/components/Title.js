import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
import Intro from "../images/intro.png";

const Title = () => {
  return (
    <Box
      w="100%"
      alignItems="center"
    >
      <Image
        src={Intro}
      />
    </Box>
  );
};

export default Title;