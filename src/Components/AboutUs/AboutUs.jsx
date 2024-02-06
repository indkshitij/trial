import React from "react";
import "./AboutUs.css";
import {
  Box,
  Text,
  Flex,
  Link,
  Image,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import aboutImg1 from "../../Asset/about/pic-1.jpg";
import aboutImg2 from "../../Asset/about/pic-2.jpg";
import aboutImg3 from "../../Asset/about/pic-3.jpg";
import icon1 from "../../Asset/about/icon1.png";
import icon2 from "../../Asset/about/icon2.png";
import icon3 from "../../Asset/about/icon3.png";
import icon4 from "../../Asset/about/icon4.png";

const AboutUs = () => {
  return (
    <>
      <Flex
        className="about"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          className="ImageSec"
          justifyContent={"center"}
          flexWrap={"wrap"}
          alignItems={"center"}
          gap={"1.25vw"}
        >
          <Box className="imgBox">
            <Image className="image" src={aboutImg1} alt="loading" />
          </Box>
          <Box className="imgBox">
            <Image className="image" src={aboutImg2} alt="loading" />
          </Box>
          <Box className="imgBox">
            <Image className="image" src={aboutImg3} alt="loading" />
          </Box>
          <Box className="imgBox">
            <Text className="experience">
              <span>20</span> <br />
              Year Experience
            </Text>
          </Box>
        </Flex>
        <Box className="contentSec">
          <Text className="heading orangeHeading">About Us</Text>
          <Text className="mainHeaing">
            The Great Place Of Medical Hospital Center
          </Text>
          <Text>
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </Text>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"nowrap"}
          >
            <Flex className="animatedBox">
              <Image src={icon1} alt="Loading" />
              <Text>Emergeny Help</Text>
            </Flex>
            <Flex className="animatedBox">
              <Image src={icon2} alt="Loading" />
              <Text>Qualified Doctors</Text>
            </Flex>
            <Flex className="animatedBox">
              <Image src={icon3} alt="Loading" />
              <Text>Best Professionals</Text>
            </Flex>
            <Flex className="animatedBox">
              <Image src={icon4} alt="Loading" />
              <Text>Medical Treatment</Text>
            </Flex>
          </Flex>
          <Button colorScheme="#1f2278" variant="solid">
            Button
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default AboutUs;
