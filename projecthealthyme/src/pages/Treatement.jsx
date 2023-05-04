import { Navbar } from "../Components/Navbar";
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
} from "@chakra-ui/react";
import IVImage from "../Images/IVImage.png";
import Iphone from "../Images/Iphone.png";
import Home from "../Images/Home.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRightIcon } from '@chakra-ui/icons'


export function Treatement({ text }) {
  const [data, setData] = useState([]);

  const getTreatements = () => {
    return axios({
      method: "get",
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/treatments`,
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getTreatements();
  }, []);

  return (
    <>
      <Container
        maxW="100%"
        // border="1px solid White"
        bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)"
      >
        <Flex>
          <Box
            height="700px"
            width="700px"
            // border="1px solid red"
            marginLeft={500}
          >
            <Image src={IVImage} width="100%" alt="Check" />
          </Box>
          <Box mt={40} marginLeft={-967}>
            <Text color="white" fontSize="250px">
              Infusion
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box mt={-80} marginLeft={600}>
            <Text color="white" fontSize="250px">
              Therapy
            </Text>
          </Box>
        </Flex>

        <Flex justifyContent="flex-end" width="40%" marginLeft="800px">
          <Box>
            <Button mr={20}>Become a Member</Button>
            <Button bgGradient="linear( rgb(51,99,100), rgb(167,210,137))">
              Book Session
            </Button>
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
            <GridItem w="100%" h="auto">
              <Text fontSize="22px" color="white" mb={5}>
                At Home Service
              </Text>
              <Image src={Home} width="100%" alt="Check" />
            </GridItem>
            <GridItem w="100%" h="auto" mb={5}>
              <Text fontSize="22px" color="white">
                Add a Covid-19 test
              </Text>
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
        <Box className="mainContainer">
          <Grid
            // border="1px solid red"
            templateColumns="repeat(4, 1fr)"
            gap="40px"
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
                  <Button> <ArrowRightIcon /> </Button>
                </HStack>
                {/* <Text color="white">{item.description}</Text> */}
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
