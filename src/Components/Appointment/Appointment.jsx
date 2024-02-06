import React from "react";
import "./Appointment.css";
import {
  Box,
  Text,
  Flex,
  Link,
  Image,
  Input,
  Button,
  Center,
  Select,
} from "@chakra-ui/react";
import mobile from "../../Asset/appointment/mobile.png";
import woman from "../../Asset/appointment/women.png";

const Appointment = () => {
  return (
    <>
      <Flex className="appointment" justifyContent="center" alignItems="center">
        <Box className="content">
          <Box className="appointmentBox">
            <Text className="appointmentHeading"> Book Appointment</Text>
            <Select placeholder="Select Department">
              <option value="option1">One</option>
              <option value="option2">Two</option>
              <option value="option3">Three</option>
            </Select>
            <Select placeholder="Select Doctor">
              <option value="option1">One</option>
              <option value="option2">Two</option>
              <option value="option3">Three</option>
            </Select>
            <Input placeholder="Your Name" type="text" />
            <Input placeholder="Phone Number" type="number" />
            <Input placeholder="dd-mm-yyyy" type="date" />
            <Button className="orangeBtn" colorScheme="" variant="solid">
              <Text className="btnText">Appointment Now</Text>
            </Button>
          </Box>
        </Box>

        <Flex className="graphic">
          <Image className="mobile" src={mobile} alt="loading" />
          <Image className="woman" src={woman} alt="loading" />
        </Flex>
      </Flex>
    </>
  );
};

export default Appointment;
