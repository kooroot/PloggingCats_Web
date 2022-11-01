import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import Intro from "../images/logo.png";

const Title = () => {
  return (
    <Flex
      id="Title"
      w="100%"
      h="60vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      backgroundColor="#ff360a"
      minW={1100}
    >
      <Image
        w="800px"
        h="400px"
        src={Intro}
        m={[0, "auto"]}
      />
      <Box
        border="2px solid #fff"
        w="120px"
        textAlign={"center"}
        py={3}
        borderRadius="50%"
        color="#fff"
        mb="150px"
      >SCROLL</Box>
    </Flex>
  );
};

export default Title;