import { Flex, Text, Image } from "@chakra-ui/react";

import f_logo from "../images/f_logo.png";

// @ 팀 주소 및 카피라이트에 관한 정보를 입력합니다.
const contactInfo =
  "서울특별시 영등포구 의사당대로3 현대캐피탈빌딩 | 대표이사 정태영 | 사업자등록번호 213-86-15419";
const copyRight = "© HYUNDAI CARD Corp.";

const Footer = () => {
  return (
    <Flex
      w="100%"
      h={186}
      justifyContent="space-around"
      alignItems="center"
      flexDir="row"
      p={[4, 4, 2]}
      bgColor="#2f2f2f"
      color="#808080"
      m={0}
    >
      <Image
        w={200}
        src={f_logo}
      />
      <Text>{contactInfo}</Text>
      <Text
      mr={20}
      >{copyRight}</Text>
    </Flex>
  );
};

export default Footer;
