import { useState, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
import { AuthContext } from "../Context/AuthContextProvider";

let url = `https://645d3ca0e01ac61058a06daf.mockapi.io/cart`;

export function Appointments() {
  const { submittedData, setSubmittedData, data, setData } =
    useContext(AuthContext);

  const toast = useToast();

  const [appointmentsData, setAppointmentsData] = useState([]);

  const [filterByCategory, setFilterByCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const [cartData, setCartData] = useState([]);

  // const getappointmentsData = () => {
  //   return axios({
  //     url: `https://642537b39e0a30d92b2bb1bb.mockapi.io/checkout`,
  //     method: "GET",
  //   }).then((res) => {
  //     console.log("appointments", res.data);
  //     setAppointmentsData(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getappointmentsData();
  // }, []);

  const getCartData = (url) => {
    return axios({
      url: `${url}`,
      method: "GET",
    }).then((res) => {
      console.log("cart", res.data);
      setCartData(res.data);
    });
  };

  useEffect(() => {
    getCartData(url);
  }, []);

  useEffect(() => {
    console.log(filterByCategory);

    if (filterByCategory != "All Treatements") {
      getCartData(
        `${url}?treatement=${filterByCategory}`
      );
    }
    else {
      getCartData(url);
    }
  }, [filterByCategory]);

  useEffect(() => {
    if (sortBy != "" && orderBy != "") {
      getCartData(`${url}?sortby=${sortBy}&order=${orderBy}`);
    } else {
      getCartData(url);
    }
  }, [sortBy, orderBy]);

  useEffect(() => {
    getCartData(`${url}?treatement=${searchBy}`);
  }, [searchBy]);

  const deleteCartData = (id) => {
    axios({
      url: `https://645d3ca0e01ac61058a06daf.mockapi.io/cart/${id}`,
      method: "delete",
    }).then(() => {
      getCartData(url);
      toast({
        title: "Booking Cancelled",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    });
  };

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
            Your Appointments
          </Text>
          {/* <Text mt="20px" color="white" fontWeight="bolder" fontSize="40px">
            Confirmation
          </Text>
          <Text mt="20px" color="white" fontSize="30px">
            Review the details before continuing to checkout.
          </Text> */}

          <Link to="/">
            <Button
            _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
              mt={20}
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
            >
              Book More Sessions
            </Button>
          </Link>
        </Flex>
      </Container>

      <Box width="100%" margin="auto" h="auto" bg="black">
        <Box
          h="100px"
          w="80%"
          bg="black"
          // border="1px solid white"
          margin="auto"
        >
          <Grid gridTemplateColumns="repeat(4,1fr)" gap="50px">
            {/* <Text color="white">Treatement: </Text> */}
            <Select
              textAlign="center"
              color="white"
              value={filterByCategory}
              onChange={(e) => setFilterByCategory(e.target.value)}
            >
              <option value="All Treatements">All Treatements</option>
              <option value="Energy Lift">Energy Lift</option>
              <option value="Recovery">Recovery</option>
              <option value="Beauty">Beauty</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Stomach Flu">Stomach Flu</option>
              <option value="Athletic Performance">Athletic Performance</option>
              <option value="Mood Support NAD+">Mood Support NAD+</option>
              <option value="Energize">Energize</option>
              <option value="Aches and Pains">Aches and Pains</option>
              <option value="Super Immune Boost">Super Immune Boost</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Hydration">Hydration</option>
              <option value="Hangover">Hangover</option>
              <option value="Diet and Detox">Diet and Detox</option>
              <option value="Myers Cocktail">Myers Cocktail</option>
              <option value="NAD+">NAD+</option>
            </Select>
            {/* <Text color="white">Sort By:</Text> */}
            <Select
              textAlign="center"
              color="white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Select to Sort</option>
              <option value="treatement">Treatement</option>
              <option value="schedule">Booking Time</option>
              <option value="price">Price</option>
            </Select>
            {/* <Text color="white">Order By:</Text> */}
            <Select
              textAlign="center"
              color="white"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="">Select Sort Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Decending</option>
            </Select>
            {/* <Text color="white">Search:</Text> */}
            <Input
              textAlign="center"
              placeholder="Search your upcoming Treatements"
              color="white"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            />
          </Grid>
        </Box>

        {cartData.length == 0 ? (
          <Flex fontSize="30px" justifyContent="center">
            <Text color="white">No Appointments</Text>
          </Flex>
        ) : (
          cartData.map((cart) => (
            <Flex
              // justifyContent="normal"
              // alignItems="center"
              border="1px solid White"
              h="auto"
              w="80%"
              margin="auto"
              flexDirection="column"
            >
              <Flex>
                <Box width="20%">
                  <Image margin="auto" h="190px" src={data.image} />
                </Box>
                <VStack
                  color="white"
                  spacing={25}
                  textAlign="left"
                  p="10px"
                  width="60%"
                >
                  <Text>
                    <b>Treatement :</b>
                    {cart.treatement}
                  </Text>
                  <Text>
                    <b>Add Booster :</b>
                    {cart.addBooster}
                  </Text>
                  <Text>
                    <b>Service Location :</b>
                    {cart.location}
                  </Text>
                  <Text>
                    <b>Booking Time :</b>
                    {cart.schedule}
                  </Text>
                </VStack>
                <VStack mt={14} color="white" width="33%">
                  <Text>Price : ${cart.price}</Text>
                  <Button
                    onClick={() => deleteCartData(cart.id)}
                    variant="outline"
                    color="White"
                    _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
                  >
                    Cancel Appointment
                  </Button>
                </VStack>
              </Flex>
            </Flex>
          ))
        )}
      </Box>
      <Footer />
    </>
  );
}
