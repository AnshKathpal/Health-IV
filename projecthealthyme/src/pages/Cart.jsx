import { useState, useReducer } from "react";
import {
  Text,
  Container,
  Box,
  Flex,
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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Stack,
  StackDivider,
  Image,
  Card, CardHeader, CardBody, CardFooter 
} from "@chakra-ui/react";
import IVImage from "../Images/IVImage.png";
import Iphone from "../Images/Iphone.png";
import Home from "../Images/Home.png";
import Mobile from "../Images/Mobile1.jpg";
import HomeTherapy from "../Images/HomeTherapy.png";
import Logo from "../Images/logo.png";
import axios from "axios";
import { useEffect } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { Footer } from "../Structure/Footer";

export function Cart(){
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
          height="700px"
          width="60%"
          // border="1px solid red"
          margin="auto"
        >
          <Text color="white" fontWeight="bolder" fontSize="60px">
            Booked Session
          </Text>
          <Text mt="20px" color="white" fontWeight="bolder" fontSize="40px">
            Confirmation
          </Text>
          <Text mt="20px" color="white" fontSize="30px">
            Review the details before continuing to checkout.
          </Text>
        </Flex>
      </Container>


      <Box border="1px solid red" width="80%" margin="auto" h="600px">
<Flex justifyContent="normal" alignItems="center" border="1px solid black" h="200px">
  <Box width="33%" border="1px solid red">
    <Text>Image</Text>
  </Box>
  <Box textAlign="left" p="10px" width="60%" border="1px solid red">
    <Text><b>Treatement :</b> </Text>
    <Text><b>Add Booster :</b> </Text>
    <Text><b>Service Location :</b> </Text>
    <Text><b>Booking Time :</b> </Text>
  </Box>
  <Box width="33%" border="1px solid red">
    <Text>
      Price : 
    </Text>
  </Box>

</Flex>
      </Box>


        </>
    )
    }