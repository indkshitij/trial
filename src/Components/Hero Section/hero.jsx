import React from "react";
import "./hero.css";
import { Box, Flex, Image, Text, Link, Button } from "@chakra-ui/react";
import heroImg from "../../Asset/main-banner/doctor.png";
const hero = () => {
  return (
    <>
      <Flex
        className="hero"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box className="hero-content">
          <Text className="heading"> We Provide All Health Care Solution </Text>
          <Text className="mainHeading">
            Protect Your Health And Take Care To Of Your Health
          </Text>
          <Button className="orangeBtn" colorScheme="" variant="solid">
            <Text className="btnText">Read More</Text>
          </Button>
        </Box>
        <Box className="hero-img">
          <Flex justifyContent={"right"} alignItems={"center"}>
            <Image className="img" src={heroImg} alt="loading" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default hero;
