import { Navbar } from "../Components/Navbar";
import { Footer } from "../Structure/Footer";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { ThemeContext } from "../Context/CustomThemeProvider";
import { useContext } from "react";
import "../CSS/Treatement.css";

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
} from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IVImage from "../Images/IVImage.png";
import Iphone from "../Images/Iphone.png";
import TestKit from "../Images/TestKit.png";
import Home from "../Images/Home.png";
import CovidTest from "../Images/CovidTest.png";
import Mobile from "../Images/Mobile1.jpg";
import HomeTherapy from "../Images/HomeTherapy.png";
import Logo from "../Images/logo.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import Homie from "../Images/Homie.png";
import Phone from "../Images/Phone.png";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

export function Treatement({ text }) {
  const [data, setData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const { theme, toggleTheme } = useContext(ThemeContext);

  const getTreatements = () => {
    return axios({
      method: "get",
      url: `https://645d4803e01ac61058a174ca.mockapi.io/treatments`,
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getTreatements();
  }, []);

  const getCities = () => {
    return axios({
      method: "get",
      url: `https://645d3ca0e01ac61058a06daf.mockapi.io/cities`,
    }).then((res) => {
      console.log("citiesData", res.data);
      setCitiesData(res.data);
    });
  };

  useEffect(() => {
    getCities();
  }, []);

  const handlewaitlist = (e) => {
    e.preventDefault();
    toast({
      title: "Reigon Updated.",
      description: "We wll try to reach you there soon",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setAddress("");
    setEmail("");
  };

  return (
    <>
      <Container
        maxW="100%"
        // border="1px solid black"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient( rgb(65,116,91), #2E5D67, #000000)"
              : "linear-gradient( rgb(65,116,91), #2E5D67, white)",
        }}
      >
        <Flex className="IVimage">
          <Box
            height={{ md: "700px" }}
            width={{ md: "700px" }}
            // border="1px solid red"
            marginLeft={{ md: 500 }}
           
            
          >
            <Image className="IVimageInner" src={IVImage} width={{ md : "100%"}} alt="Check" />
          </Box>
          <Box mt={{ md: 40 }} marginLeft={{ md: -967 }}>
            <Text
              className="textInfusion"
              style={{ color: theme === "dark" ? "white" : "black" }}
              fontSize={{ md: "250px" }}
            >
              Infusion
            </Text>
          </Box>
        </Flex>
        <Flex className="therBox">
          <Box  mt={{ md: -80 }} ml="600px" >
            <Text
              className="textTher"
              style={{ color: theme === "dark" ? "white" : "black" }}
              fontSize={{ md: "250px" }}
            >
              Therapy
            </Text>
          </Box>
        </Flex>

        <Flex
          justifyContent="flex-end"
          width={{ md: "40%" }}
          marginLeft={{ md: "800px" }}
        >
          <Box className="bookBtn">
            <Link to="/form">
              <Button
              className="button1"
                fontSize={{ md: "15px" }}
                width={{ md: "180px" }}
                height={{ md: "40px" }}
                mr={{ md: 20 }}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
              >
                Become a Member
              </Button>
            </Link>
            <AnchorLink href="#container">
              <Button
              className="button2"
                fontSize={{ md: "15px" }}
                width={{ md: "180px" }}
                height={{ md: "40px" }}
                bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
              >
                Book Session
              </Button>
            </AnchorLink>
          </Box>
        </Flex>
      </Container>

      <Container
        className="nurses"
        maxW="100%"
        p={100}
        style={{ background: theme === "dark" ? "black" : "white" }}
      >
        <Box>
          <Text
            fontSize="40px"
            marginBottom={10}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Schedule online in minutes. Our Nurses Comes to you.
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={40}>
            <GridItem w="100%" h="auto">
              <Text
                fontSize="22px"
                style={{ color: theme === "dark" ? "white" : "black" }}
                mb={5}
              >
                Easy Online Booking
              </Text>
              <Image src={Iphone} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto" mb={5}>
              <Text
                fontSize="22px"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                Add a Covid-19 test
              </Text>
              <Image src={TestKit} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto">
              <Text
                fontSize="22px"
                style={{ color: theme === "dark" ? "white" : "black" }}
                mb={5}
              >
                At Home Service
              </Text>
              <Image src={Home} width="100%" alt="Check" />
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Container
        maxW="100%"
        p={100}
        style={{
          background:
            theme === "dark"
              ? "black"
              : "radial-gradient(closest-corner at 50% 60%,  rgb(65,116,91), #2E5D67, white)",
        }}
      >
        <Flex justifyContent="space-between" alignItems="center" mb="20px">
          <Box >
            <Text
            className="menuText"
              fontSize={{md :"40px"}}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              Treatement Menu
            </Text>
          </Box>

          <Box>
            <Text
            className="menuText2"
              fontSize={{md : "20px"}}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              We Offer a wide range of therpies and booster suppliments
            </Text>
          </Box>
        </Flex>
        <Box className="mainContainer" id="container">
          <Grid
            // border="1px solid red"
            templateColumns={{
              md: "repeat(4, 1fr)",
            }}
            className="menu"
            gap={{ md: "40px" }}
          >
            {data?.map((item) => (
              <GridItem
                className="front"
                borderRadius="3%"
                bg="rgb(34,34,34)"
                h="auto"
                p={5}
              >
                <Image
                  // border="1px solid white"
                  src={item.image}
                  width="50%"
                  alt="Check"
                  mt="10px"
                  ml="10px"
                />
                <Text mt={15} align="left" pl={7} fontSize={20} color="white">
                  {item.title}
                </Text>
                <HStack spacing="100px">
                  <Text mt={3} pl={7} align="left" fontSize={30} color="white">
                    $ {item.price}
                  </Text>
                  <Link to={`/booktreatement/${item.id}`}>
                    <Button>
                      {" "}
                      <ArrowRightIcon />{" "}
                    </Button>
                  </Link>
                </HStack>
                {/* <Text color="white">{item.description}</Text> */}
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
      <Container
        maxW= {{md:"100%"}}
        p={100}
        style={{ background: theme === "dark" ? "black" : "white" }}
      >
        <Box>
          <Text
            fontSize="40px"
            marginBottom={10}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            How does it works?
          </Text>
          <Text
            fontSize="25px"
            marginBottom={10}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            At Health IV everything we do is based on one core principle. That
            health is for everybody. It doesn’t matter who you are or where you
            are, we want to help you feel rejuvenated.
          </Text>
          <Box    >
            <Grid
            className="work"
              placeItems="center"
              // border="1px solid white"
              templateColumns= {{md : "repeat(4, 1fr)"}}
              gap={{md : 20 }}
            
            >
              <GridItem w="100%" h="auto">
                <Text
                  fontSize="18px"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                  mb={5}
                >
                  Book appointments easily on your phone.
                </Text>
                <Image src={Phone} width="100%" alt="Check" />
              </GridItem>
              <GridItem w="100%" h="auto">
                <Text
                  fontSize="18px"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                  mb={5}
                >
                  Choose from a wide selection of revitalizing treatments.
                </Text>
                <Image src={HomeTherapy} width="85%" alt="Check" />
              </GridItem>
              <GridItem w="100%" h="auto" mb={5}>
                <Text
                  fontSize="18px"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                  mb={5}
                >
                  Include an at-home COVID test.
                </Text>
                <Image src={CovidTest} width="80%" alt="Check" />
              </GridItem>
              <GridItem w="100%" h="auto" mb={5}>
                <Text
                  fontSize="18px"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                >
                  Enjoy the benefits of IV therapy from the comfort of your
                  home.
                </Text>
                <Image ml={10} src={Homie} width="80%" alt="Check" />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Location Container */}

      <Container
        maxW="100%"
        p={100}
        style={{ background: theme === "dark" ? "black" : "white" }}
      >
        <Box mb="5%">
          <Text
            fontSize="40px"
            marginBottom={10}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Our locations
          </Text>
          <Text
            className="locationText"
            fontSize="25px"
            marginBottom={10}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            We believe in making wellness mobile. Healthcare shouldn’t be
            stressful. It should be accessible. Schedule an appointment online
            and one of our healthcare professionals will visit you in the
            comfort of your own home.
          </Text>
          <Box  >
            <Grid
            className="locations"
               templateColumns={{ md :"repeat(3, 1fr)"}}
              gap={40}
            >
              {citiesData &&
                citiesData?.map((cities) => (
                  <GridItem placeItems="center" w="100%" h="auto">
                    <Image
                      margin="auto"
                      src={cities.cityImage}
                      borderRadius="50%"
                      width="30%"
                      alt="Check"
                    />
                    <Text
                      fontSize="22px"
                      style={{ color: theme === "dark" ? "white" : "black" }}
                      mt={4}
                    >
                      {cities.city}
                    </Text>
                  </GridItem>
                ))}
            </Grid>
          </Box>
        </Box>

        <Box
          className="form"
          p={10}
          width="50%"
          margin="auto"
          style={{
            border: theme === "dark" ? "1px solid white" : "1px solid black",
          }}
        >
          <Text
            fontSize="40px"
            marginBottom={10}
            style={{
              color: theme === "dark" ? "white" : "black",
              borderBottom:
                theme === "dark" ? "1px solid white" : "1px solid black",
            }}
          >
            Join our waitlist
          </Text>
          <Text
            fontSize="22px"
            marginBottom={10}
            style={{
              color: theme === "dark" ? "white" : "black",
              borderBottom:
                theme === "dark" ? "1px solid white" : "1px solid black",
            }}
          >
            Don’t see your region on our list? We’ll let you know when our
            service area expands.
          </Text>
          <form onSubmit={handlewaitlist}>
            <FormControl required>
              <FormLabel
                fontSize="20px"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                Email Address
              </FormLabel>
              <Input
                style={{ color: theme === "dark" ? "white" : "black" }}
                mb="10px"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <FormLabel
                fontSize="20px"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                Address
              </FormLabel>
              <Input
                style={{ color: theme === "dark" ? "white" : "black" }}
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />

              <Button
                // onClick={() =>
                //   toast({
                //     title: "Reigon Updated.",
                //     description: "We wll try to reach you there soon",
                //     status: "success",
                //     duration: 2000,
                //     isClosable: true,
                //   })
                // }
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
                type="submit"
                bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
                mt={5}
                width="100%"
              >
                {" "}
                Submit{" "}
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>

      <Container
        bgGradient="linear( rgb(65,116,91), #2E5D67)"
        h="400px"
        maxW="100%"
      >
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Box fontSize={30} mr={10}>
            <Text
              fontWeight="bolder"
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              {" "}
              Get up to 34% off a treatment each month
            </Text>
          </Box>
          <Box className="membership" width={{ md : "400px"}} ml={{md : 10}} p={5} border= {{md : "3px solid white"}}>
            <Text
              fontWeight="bolder"
              fontSize={20}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              Membership price
            </Text>
            <Text
              mt={5}
              fontSize={35}
              fontWeight="bolder"
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              $199
            </Text>
            <Text
              fontWeight="bolder"
              fontSize={20}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              1 Credit
            </Text>
            <Text
              mt={5}
              fontWeight="bolder"
              fontSize={15}
              style={{ color: theme === "dark" ? "white" : "black" }}
            >
              Receive a credit towards any treatment under $500 each month.
            </Text>
            <Link to="/form">
              <Button
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
                mt={10}
                style={{ color: theme === "dark" ? "white" : "white" }}
                bg="black"
              >
                Become a Member
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>

      {/* <Container maxW="100%" h={400} bg="black"> */}

      <Footer />
    </>
  );
}
