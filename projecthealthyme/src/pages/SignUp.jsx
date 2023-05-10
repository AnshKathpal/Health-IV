import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

function SignUp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const toast = useToast()

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      name: name,
      email: email,
      password: password,
      phoneNo: phoneNo,
    };

    try {
      // Make a POST request to the API to save the user
      const response = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        // If the user was successfully saved, add it to the existing list of users
        const savedUser = await response.json();
        console.log(savedUser);
        setUsers([...users, savedUser]);

        toast({
          title: 'Account Created - Kindly LogIn',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

        navigate("/");
      } else {
        console.error("Failed to save user");
        toast({
          title: 'Something went wrong',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Clear the input fields after submission
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNo("");
  };

  return (
    <>
      <Container bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)" maxW="100%">
        <Box p={10} width="70%" margin="auto" border="1px solid white">
          <Text fontSize="40px" marginBottom={10} color="white">
            <u>Sign Up To HealthIV</u>
          </Text>

          <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel fontSize="20px" color="white">
              Name
            </FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="white"
              mb="10px"
              required
            />

            <FormLabel fontSize="20px" color="white">
              Email Address
            </FormLabel>
            <Input
              color="white"
              mb="10px"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormLabel fontSize="20px" color="white">
              Phone Number
            </FormLabel>
            <Input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              color="white"
              type="text"
              required
            />

            <FormLabel fontSize="20px" color="white">
              Set Password
            </FormLabel>
            <Input
              color="white"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              // onClick={handleSubmit}
              // onClick={() =>

              //   toast({
              //     title: "Message Sent",
              //     description: "We wll try to reach you soon",
              //     status: "success",
              //     duration: 2000,
              //     isClosable: true,
              //   })
              // }
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
              mt={5}
              width="100%"
              type="submit"
            >
              Sign Up
            </Button>
          </FormControl>
          </form>

          <Text mt="70px" fontSize="20px" color="white">
            Already have Account <Link to="/"><span><u>Login</u></span></Link>{" "}
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
