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

export function Appointments() {

    const { submittedData, setSubmittedData, data, setData } =
    useContext(AuthContext);

    const toast = useToast()


  const [appointmentsData, setAppointmentsData] = useState([]);

  const [cartData, setCartData] = useState([]);

  const getappointmentsData = () => {
    return axios({
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/checkout`,
      method: "GET",
    }).then((res) => {
      console.log("appointments", res.data);
      setAppointmentsData(res.data);
    });
  };

  useEffect(() => {
    getappointmentsData();
  }, []);

  const getCartData = () => {
    return axios({
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,
      method: "GET",
    }).then((res) => {
      console.log("cart",res.data);
      setCartData(res.data);
    });
  };

  useEffect(() => {
    getCartData();
  }, []);

  const deleteCartData = (id) => {
    axios({
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`,
      method: "delete",
    }).then(() => {
      getCartData();
      toast({
        title: 'Booking Cancelled',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
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
              mt={20}
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
            >
              Book More Sessions
            </Button>
          </Link>
        </Flex>
      </Container>

      <Box width="100%" margin="auto" h="auto" bg="black">
      {cartData.length == 0 ? <Flex fontSize="30px" justifyContent="center"><Text color="white">No Appointments</Text></Flex> :
          cartData.map((cart) => (
            <Flex
              justifyContent="normal"
              alignItems="center"
              border="1px solid White"
              h="200px"
              w="80%"
              margin="auto"
            >
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
              <VStack color="white" width="33%">
                <Text>Price : ${cart.price}</Text>
                <Button
                  onClick={() => deleteCartData(cart.id)}
                  variant="outline"
                  color="White"
                >
                  Cancel Appointment
                </Button>
              </VStack>
            </Flex>
          ))}
      </Box>
     < Footer />
    </>
  );
}
