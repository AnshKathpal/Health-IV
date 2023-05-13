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

export function Blogs() {
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
            Blogs
          </Text>
        </Flex>
      </Container>

      <Container bg="black" maxW="100%">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          mb="20px"
          borderRadius="15px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/07/liquid_wuxga.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
            Why the “f” word is the most important word in weight management
            <Button ml="30px" variant="outline" _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
              Read More
            </Button>
          </Text>
        </Flex>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          borderRadius="15px"
          mb="20px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/07/03.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
          Big ways digital healthcare is changing how and where you access care
            <Button _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} ml="30px" variant="outline">
              Read More
            </Button>
          </Text>
        </Flex>
        {/* <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          borderRadius="15px"
          mb="20px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/06/iv-bag-e1625019337527.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
          How to recover from a hangover fast
            <Button ml="30px" variant="outline">
              Read More
            </Button>
          </Text>
        </Flex> */}
        {/* <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          borderRadius="15px"
          mb="20px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/07/liquid_wuxga.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
          Benefit of having IV therapy at home
            <Button ml="30px" variant="outline">
              Read More
            </Button>
          </Text>
        </Flex> */}
        {/* <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          borderRadius="15px"
          mb="20px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/06/iv-bag-e1625019337527.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
          Get glowing skin, hair, and nails with HealthIV vitamin drips
            <Button ml="30px" variant="outline">
              Read More
            </Button>
          </Text>
        </Flex> */}
        <Flex
          justifyContent="space-around"
          alignItems="center"
          border="1px solid white"
          p={30}
          borderRadius="15px"
        >
          <Box width="300px">
            <Image src="https://healthiv.com/wp-content/uploads/2021/07/liquid_wuxga.jpg" />
          </Box>
          <Text color="white" fontSize="50px">
          Why Covid-19 testing and contact tracing is essential for businesses
            <Button _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} ml="30px" variant="outline">
              Read More
            </Button>
          </Text>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
}
