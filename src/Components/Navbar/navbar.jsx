import React from "react";
import "./navbar.css";
import { Box, Text, Flex, Link, Image, IconButton } from "@chakra-ui/react";
import { AddIcon, ChevronRightIcon, PhoneIcon } from "@chakra-ui/icons";
import logo from "../../Asset/logo/logo.png";

const navbar = () => {
  return (
    <>
      <Flex className="nav" justifyContent="space-between" alignItems="center">
        <Box className="logo">
          <Image src={logo} alt="logo Loading" />
        </Box>
        <Flex
          className="navLinkGroup"
          gap="2vw"
          justifyContent={"right"}
          alignItems={"center"}
        >
          <Link className="navLink" to={"/"}>
            Home
          </Link>
          <Link className="navLink" to={"/"}>
            Pages{" "}
            <AddIcon className="navAdd" boxSize={"2.5"} color={"#bbbbcf"} />
          </Link>
          <Link className="navLink" to={"/"}>
            Services{" "}
            <AddIcon className="navAdd" boxSize={"2.5"} color={"#bbbbcf"} />
          </Link>
          <Link className="navLink" to={"/"}>
            Blog{" "}
            <AddIcon className="navAdd" boxSize={"2.5"} color={"#bbbbcf"} />
          </Link>
          <Link className="navLink" to={"/"}>
            About Us
          </Link>

          <Link className="navLink" to={"/"}>
            <Flex alignItems={"center"} gap={"0.4vw"}>
              <IconButton
                aria-label="Call Sage"
                background="#e1e2f6"
                fontSize="20px"
                icon={<PhoneIcon color="#565acf" />}
              />
              <Text className="navNum" as="b">
                (+91) 91799 09425
              </Text>
            </Flex>
          </Link>

          <Link className="boxBtn" to={"/"}>
            <Flex alignItems={"center"} gap={"1vw"}>
              <Text color={"white"}>Contact Us</Text>
              <Box className="boxBtnIcon">
                <ChevronRightIcon boxSize={"7"} />
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default navbar;
