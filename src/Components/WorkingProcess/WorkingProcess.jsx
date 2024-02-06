import React from "react";
import "./WorkingProcess.css";
import dummyData from "../../DummyData";
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
import { ChevronRightIcon } from "@chakra-ui/icons";

const WorkingProcess = () => {
  return (
    <>
      <Box className="proccess">
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Text className="heading orangeHeading">Working Proccess</Text>
            <Text className="mainHeading">How We Works</Text>
          </Flex>
          <Flex
            className="proccessBoxContainer"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {dummyData.workingProcess.map((item) => {
              return (
                <Box className="proccessBox" key={item.index}>
                  <Text className="number">{item.number}</Text>
                  <Text className="name">{item.name}</Text>
                  <Text className="description">{item.description}</Text>
                  {/* LINK */}
                  <Flex alignItems={"center"}>
                    <Link className="processBtn" to={item.link}>
                      <Flex alignItems={"center"} gap={"1.2vw"}>
                        <Text className="btnContent">View More</Text>
                        <Box className="processBtnIconBox">
                          <ChevronRightIcon
                            className="processBtnIcon"
                            boxSize={"7"}
                          />
                        </Box>
                      </Flex>
                    </Link>
                  </Flex>
                  {/* Link */}
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default WorkingProcess;
