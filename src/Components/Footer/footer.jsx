import React from "react";
import "./footer.css";
import { Box, Text, Flex, Link, Image, Input, Button } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import logo from "../../Asset/logo/logo.png";
import underLineImg from "../../Asset/shap/footer-line.png";
import twitter from "../../Asset/social/twitter.png";
import Linked from "../../Asset/social/linkedin.png";
import insta from "../../Asset/social/instagram.png";
import facebook from "../../Asset/social/facebook.png";

const footer = () => {
  return (
    <>
      
      <Box className="footer">
        <Flex
          className="linkContainer"
          justifyContent="space-between"
          alignItems={"start"}
        >
          {/* BOX 1 */}
          <Box className="footerBox">
            <Flex flexDirection={"column"} gap={"2vh"}>
              <Image
                src={logo}
                alt="logo loading"
                boxSize={"3vw"}
                width={"14vw"}
              />
              <Text className="info" mt={"2.25vh"}>
                hii my name is Kshitij singh.hii my name is Kshitij singh
              </Text>
              <Flex alignItems={"center"} gap={"0.8vw"}>
                <Box className="callIcon">
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <PhoneIcon boxSize={7} color="white" />
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  ></Flex>
                  <Text className="contact">Contact Us</Text>
                  <Text className="contactNum">+91 917 990 9425</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          {/* BOX 2 */}
          <Box className="footerBox">
            <Flex flexDirection={"column"} gap={"1.5vh"} mb={"1.5vw"}>
              <Text className="footerHeading">Quick Links</Text>
              <Image
                className="underlineImg"
                src={underLineImg}
                alt="Footer-Loading"
              />
            </Flex>
            <Flex flexDirection={"column"} gap={"1.5vh"}>
              <Link className="footerLink" to={"/"}>
                About Us
              </Link>

              <Link className="footerLink" to={"/"}>
                Services
              </Link>

              <Link className="footerLink" to={"/"}>
                Booking
              </Link>

              <Link className="footerLink" to={"/"}>
                FAQ's
              </Link>

              <Link className="footerLink" to={"/"}>
                Blogs
              </Link>

              <Link className="footerLink" to={"/"}>
                Our Team{" "}
              </Link>
            </Flex>
          </Box>
          {/* BOX 3 */}
          <Box className="footerBox">
            <Flex flexDirection={"column"} gap={"1.5vh"} mb={"1.5vw"}>
              <Text className="footerHeading">Our Services</Text>
              <Image
                className="underlineImg"
                src={underLineImg}
                alt="Footer-Loading"
              />
            </Flex>
            <Flex flexDirection={"column"} gap={"1.5vh"}>
              <Link className="footerLink" to={"/"}>
                Dental Care
              </Link>

              <Link className="footerLink" to={"/"}>
                Cardiac Clinic
              </Link>

              <Link className="footerLink" to={"/"}>
                Massege Therepay
              </Link>

              <Link className="footerLink" to={"/"}>
                Cardiology
              </Link>

              <Link className="footerLink" to={"/"}>
                Precise Diagnosis
              </Link>

              <Link className="footerLink" to={"/"}>
                Ambulance Service{" "}
              </Link>
            </Flex>
          </Box>
          {/* BOX 4 */}
          <Box className="footerBox">
            <Flex flexDirection={"column"} gap={"1.5vh"} mb={"1.5vw"}>
              <Text className="footerHeading">Subscribe</Text>
              <Image
                className="underlineImg"
                src={underLineImg}
                alt="Footer-Loading"
              />
            </Flex>
            <Flex flexDirection={"column"} gap={"2.5vh"}>
              <Input
                p={"2"}
                className="EmailInput"
                type="email"
                placeholder="Enter Your Email"
                variant="filled"
              />
              <Button className="emailBtn" variant="filled">
                <Text className="emailBtnContent">Subscribe Now</Text>
              </Button>
              <Flex gap={"1vw"}>
                <Link className="socialLink" to={""}>
                  <Image src={insta} alt="loading" />
                </Link>
                <Link className="socialLink" to={""}>
                  <Image src={Linked} alt="loading" />
                </Link>

                <Link className="socialLink" to={""}>
                  <Image src={facebook} alt="loading" />
                </Link>
                <Link className="socialLink" to={""}>
                  <Image src={twitter} alt="loading" />
                </Link>
              </Flex>
            </Flex>
          </Box>
          {/* BOX 5 */}
        </Flex>
        <Text className="copyright">
          Copyright &#169; 2023 Developed by &nbsp;
          <Link to={"/"} className="profile">
            Kshitij Singh
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default footer;
