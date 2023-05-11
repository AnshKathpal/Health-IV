import { Navbar } from "../Components/Navbar";
import { Footer } from "../Structure/Footer";
import { Link } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
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
        bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)"
      >
        <Flex>
          <Box
            height={{ base: "100px", sm: "300px", md: "700px" }}
            width={{ base: "100px", sm: "300px", md: "700px" }}
            // border="1px solid red"
            marginLeft={{ base: 100, sm: 240, md: 500 }}
          >
            <Image src={IVImage} width="100%" alt="Check" />
          </Box>
          <Box
            mt={{ base: 10, sm: 20, md: 40 }}
            marginLeft={{ base: "100px", sm: -465, md: -967 }}
          >
            <Text
              color="white"
              fontSize={{ base: 10, sm: "100px", md: "250px" }}
            >
              Infusion
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box
            mt={{ base: 10, sm: "-130px", md: -80 }}
            marginLeft={{ base: "100px", sm: 223, md: 600 }}
          >
            <Text
              color="white"
              fontSize={{ base: 10, sm: "100px", md: "250px" }}
            >
              Therapy
            </Text>
          </Box>
        </Flex>

        <Flex
          justifyContent="flex-end"
          width={{ sm: "80%", md: "40%" }}
          marginLeft={{ base: 10, sm: "100px", md: "800px" }}
        >
          <Box>
            <Link to="/form">
              <Button
                fontSize={{ sm: "10px", md: "15px" }}
                width={{ sm: "100px", md: "180px" }}
                height={{ sm: "30px", md: "40px" }}
                mr={{ sm: 10, md: 20 }}
              >
                Become a Member
              </Button>
            </Link>
            <AnchorLink href="#container">
              <Button
                fontSize={{ sm: "10px", md: "15px" }}
                width={{ sm: "100px", md: "180px" }}
                height={{ sm: "30px", md: "40px" }}
                bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
              >
                Book Session
              </Button>
            </AnchorLink>
          </Box>
        </Flex>
      </Container>

      <Container maxW="100%" p={100} bg="black">
        <Box>
          <Text fontSize="40px" marginBottom={10} color="white">
            Schedule online in minutes. Our Nurses Comes to you.
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={40}>
            <GridItem w="100%" h="auto">
              <Text fontSize="22px" color="white" mb={5}>
                Easy Online Booking
              </Text>
              <Image src={Iphone} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto" mb={5}>
              <Text fontSize="22px" color="white">
                Add a Covid-19 test
              </Text>
              <Image src={TestKit} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto">
              <Text fontSize="22px" color="white" mb={5}>
                At Home Service
              </Text>
              <Image src={Home} width="100%" alt="Check" />
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Container maxW="100%" p={100} bg="black">
        <Flex justifyContent="space-between" alignItems="center" mb="20px">
          <Box>
            <Text fontSize="40px" color="white">
              Treatement Menu
            </Text>
          </Box>

          <Box>
            <Text fontSize="20px" color="white">
              We Offer a wide range of therpies and booster suppliments
            </Text>
          </Box>
        </Flex>
        <Box className="mainContainer" id="container">
          <Grid
            // border="1px solid red"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: "20px", sm: "30px", md: "40px" }}
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
      <Container maxW="100%" p={100} bg="black">
        <Box>
          <Text fontSize="40px" marginBottom={10} color="white">
            How does it works?
          </Text>
          <Text fontSize="25px" marginBottom={10} color="white">
            At Health IV everything we do is based on one core principle. That
            health is for everybody. It doesn’t matter who you are or where you
            are, we want to help you feel rejuvenated.
          </Text>

          <Grid
            placeItems="center"
            // border="1px solid white"
            templateColumns="repeat(4, 1fr)"
            gap={20}
          >
            <GridItem w="100%" h="auto">
              <Text fontSize="18px" color="white" mb={5}>
                Book appointments easily on your phone.
              </Text>
              <Image src={Phone} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto">
              <Text fontSize="18px" color="white" mb={5}>
                Choose from a wide selection of revitalizing treatments.
              </Text>
              <Image src={HomeTherapy} width="85%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto" mb={5}>
              <Text fontSize="18px" color="white" mb={5}>
                Include an at-home COVID test.
              </Text>
              <Image src={CovidTest} width="80%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto" mb={5}>
              <Text fontSize="18px" color="white">
                Enjoy the benefits of IV therapy from the comfort of your home.
              </Text>
              <Image ml={10} src={Homie} width="80%" alt="Check" />
            </GridItem>
          </Grid>
        </Box>
      </Container>

      {/* Location Container */}

      <Container maxW="100%" p={100} bg="black">
        <Box mb="5%">
          <Text fontSize="40px" marginBottom={10} color="white">
            Our locations
          </Text>
          <Text fontSize="25px" marginBottom={10} color="white">
            We believe in making wellness mobile. Healthcare shouldn’t be
            stressful. It should be accessible. Schedule an appointment online
            and one of our healthcare professionals will visit you in the
            comfort of your own home.
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={40}>
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
                  <Text fontSize="22px" color="white" mt={4}>
                    {cities.city}
                  </Text>
                </GridItem>
              ))}
          </Grid>
        </Box>

        <Box p={10} width="50%" margin="auto" border="1px solid white">
          <Text fontSize="40px" marginBottom={10} color="white">
            Join our waitlist
          </Text>
          <Text fontSize="22px" marginBottom={10} color="white">
            Don’t see your region on our list? We’ll let you know when our
            service area expands.
          </Text>
          <form onSubmit={handlewaitlist}>
            <FormControl required>
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
                required
              />
              <FormLabel fontSize="20px" color="white">
                Address
              </FormLabel>
              <Input
                color="white"
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
            <Text fontWeight="bolder" color="black">
              {" "}
              Get up to 34% off a treatment each month
            </Text>
          </Box>
          <Box width="400px" ml={10} p={5} border="3px solid white">
            <Text fontWeight="bolder" fontSize={20} color="black">
              Membership price
            </Text>
            <Text mt={5} fontSize={35} fontWeight="bolder" color="black">
              $199
            </Text>
            <Text fontWeight="bolder" fontSize={20} color="black">
              1 Credit
            </Text>
            <Text mt={5} fontWeight="bolder" fontSize={15} color="black">
              Receive a credit towards any treatment under $500 each month.
            </Text>
            <Link to="/form">
              <Button mt={10} color="white" bg="black">
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
