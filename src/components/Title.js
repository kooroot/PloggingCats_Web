import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import Title_t from "../images/title.png";
import Scroll from "../images/scroll.png";

const Title = () => {
  return (
    <Flex
      id="Title"
      className="cont"
      w={1200}
      h={650}
      mx={'auto'}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      backgroundColor="#ff360a"
    >
      <Image
        w="600px"
        h="300px"
        src={Title_t}
        m={[0, "auto"]}
      />
      <Box position={"relative"}>
      <Box
        border="2px solid #fff"
        w="120px"
        textAlign={"center"}
        py={3}
        borderRadius="50%"
        color="#fff"
        mb="150px"
      >SCROLL</Box>
      <Image
      position={"absolute"}
      top="70px"
      left="40px"
        w="27px"
        h="100px"
        src={Scroll}
        m={[0, "auto"]}
      />
      </Box>
      
      
    </Flex>
  );
};

export default Title;