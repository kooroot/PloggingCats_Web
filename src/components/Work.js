import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Work = () => {
  return (
    <Flex
      id="하는일"
      w="100%"
      h={660}
      alignItems="center"
      justifyContent="center"
      bgColor="#fff"
    >
      <Text
      fontSize={96}
      fontWeight="bold"
      >
        하는일
      </Text>
    </Flex>
  );
};

export default Work;