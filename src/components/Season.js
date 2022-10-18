import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
import season_intro from "../images/season/season_intro.png";
import season1 from "../images/season/season_1.jpg";
import season2 from "../images/season/season_2.jpg";
import season3 from "../images/season/season_3.jpg";
import season4 from "../images/season/season_4.jpg";
import season5 from "../images/season/season_5.jpg";
import season6 from "../images/season/season_6.jpg";

const Season = () => {
  const seasonData = [
    {image: season1, text: "멸종위기 동물 해달 NFT", open: true},
    {image: season2, text: "COMING SOON 2", open: false},
    {image: season3, text: "COMING SOON 3", open: false},
    {image: season4, text: "COMING SOON 4", open: false},
    {image: season5, text: "COMING SOON 5", open: false},
    {image: season6, text: "COMING SOON 6", open: false},
  ];

  const seasonList = (idx) => {
    return (
      <Flex
        w="45%"
        h={300}
      >
        <Box>
          <Image
            w="100%"
            h="100%"
            m={[0, "auto"]}
            src={seasonData[idx].image}
          />
        </Box>
        <Text>SEASON #{idx}</Text>
        <Text>{seasonData[idx].open ? seasonData[idx].text : ""}</Text>
      </Flex>
    )
  }
  return (
    <Flex
      id="Season"
      maxW={1920}
      w="100%"
      m={[0, "auto"]}
      alignItems="center"
      backgroundColor="#f3ebcb"
      flexDir="column"
      pb={200}
    >
      <Image
        maxW={1920}
        w="100%"
        h="auto"
        src={season_intro}
      />
      <Flex
        w="100%"
        h="100%"
        p={[300, 50]}
        flexDir="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {seasonList(0)}
        {seasonList(1)}
        {seasonList(2)}
        {seasonList(3)}
        {seasonList(4)}
        {seasonList(5)}
      </Flex>
    </Flex>
  );
};

export default Season;