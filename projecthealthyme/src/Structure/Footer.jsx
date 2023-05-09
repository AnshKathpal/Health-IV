import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Flex
      maxW="100%"
      h={500}
      bg="black"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Image width="20%" src={Logo} alt="logo" />

      <VStack spacing={8} color="white" width="300px" h="auto">
        <Text
          fontWeight="semibold"
          bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
          bgClip="text"
        >
          Menu
        </Text>

        <Link to="/">
          <Text fontWeight="semibold">TREATMENTS</Text>
        </Link>

        <Link to="/blogs">
          <Text fontWeight="semibold">BLOGS</Text>
        </Link>

        <Link to="/aboutus">
          <Text fontWeight="semibold">ABOUT US</Text>
        </Link>

        <Link to="/contact">
          <Text fontWeight="semibold">CONTACT</Text>
        </Link>

          <Text fontWeight="semibold">LOGIN</Text>
      </VStack>
      <VStack spacing={8} color="white" width="300px" h="auto" mt="-165px">
        <Text
          fontWeight="semibold"
          bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
          bgClip="text"
        >
          Contact
        </Text>
        <Text fontWeight="semibold">8448837130</Text>
        <Text fontWeight="semibold">anshkathpal17@gmail.com</Text>
      </VStack>
    </Flex>
  );
}
