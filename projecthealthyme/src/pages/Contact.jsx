import { useParams } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

import {
  Text,
  Container,
  Box,
  Flex,
  Image,
  HStack,
  Button,
  Spacer,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Textarea,
  Select,
  Hr,
} from "@chakra-ui/react";
import IVImage from "../Images/IVImage.png";
import Iphone from "../Images/Iphone.png";
import Home from "../Images/Home.png";
import Mobile from "../Images/Mobile1.jpg";
import HomeTherapy from "../Images/HomeTherapy.png";
import Logo from "../Images/logo.png";
import axios from "axios";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { Footer } from "../Structure/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Contact() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <Container
        maxW="100%"
        // border="1px solid White"
        bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="750px"
          width="70%"
          //   border="1px solid red"
          margin="auto"
        >
          <Box width="60%">
            <Image src={Logo} />
          </Box>

          <Text mt={-100} color="white" fontSize="100px">
            Contact
          </Text>
        </Flex>
      </Container>

      <Container bg="black" maxW="100%">
        <Box p={10} width="70%" margin="auto" border="1px solid white">
          <Text fontSize="40px" marginBottom={10} color="white">
            Get In Touch
          </Text>

          <FormControl isRequired>
            <FormLabel fontSize="20px" color="white">
              First Name
            </FormLabel>
            <Input color="white" mb="10px" type="text" />
            <FormLabel fontSize="20px" color="white">
              Last Name
            </FormLabel>
            <Input color="white" mb="10px" type="text" />

            <FormLabel fontSize="20px" color="white">
              Email Address
            </FormLabel>
            <Input
              color="white"
              mb="10px"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <FormLabel fontSize="20px" color="white">
              Phone Number
            </FormLabel>
            <Input color="white" type="text" />

            <FormLabel fontSize="20px" color="white">
              Address
            </FormLabel>
            <Textarea
              color="white"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <FormLabel fontSize="20px" color="white">
              Message
            </FormLabel>
            <Textarea color="white" type="text" />

            <Button
              onClick={() =>
                toast({
                  title: "Message Sent",
                  description: "We wll try to reach you soon",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
              mt={5}
              width="100%"
            >
              Send Message
            </Button>
          </FormControl>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
