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

const url = `https://645d3ca0e01ac61058a06daf.mockapi.io/cart`;

export function Cart() {
  const { submittedData, setSubmittedData, data, setData } =
    useContext(AuthContext);

  const [filterByCategory, setFilterByCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const toast = useToast();

  console.log("cart", submittedData);

  const [cartData, setCartData] = useState([]);

  const getCartData = () => {
    return axios({
      url: url,
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      setCartData(res.data);
    });
  };

  useEffect(() => {
    getCartData(url);
  }, []);

  useEffect(() => {
    if (filterByCategory != "all") {
      getCartData(`${url}?category=${filterByCategory}`);
    }
  }, [filterByCategory]);

  useEffect(() => {
    console.log(sortBy)
    console.log(orderBy)
    getCartData(`${url}?_sort=${sortBy}&_order=${orderBy}`)
  }, [sortBy,orderBy]);

  const deleteCartData = (id) => {
    axios({
      url: `https://645d3ca0e01ac61058a06daf.mockapi.io/cart/${id}`,
      method: "delete",
    }).then(() => {
      getCartData();

      toast({
        title: "Booking Cancelled",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += +item.price;
    });
    return totalPrice;
  };

  console.log(cartData, "dataaa");

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

      {/* <Flex color="white" bg="black" className="filter-options">
        <Text>
          Category:
          <Select
            className="filter-by-category"
            value={filterByCategory}
            onChange={(e) => {
              setFilterByCategory(e.target.value);
            }}
          >
            <option value="all">All Treatements</option>
            <option value="All Inclusive">All Inclusive</option>
            <option value="Hydration">Hydration</option>
            <option value="Energy Lift">Energy Lift</option>
            <option value="Recovery">Recovery</option>
            <option value="Beauty">Beauty</option>
            <option value="Immune Boost">Immune Boost</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Stomach Flu">Stomach Flu</option>
            <option value="Hangover">Hangover</option>
            <option value="Myers Cocktail">Myers Cocktail</option>
          </Select>
        </Text>
        <Text>
          Sort by:
          <Select className="sort-by" value = {sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select an option</option>
            <option value="schedule">Date & Time</option>
            <option value="price">Price</option>
            <option value="addBooster">addBooster</option>
          </Select>
        </Text>
        <Text>
          Order:
          <Select className="order" value = {orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="">Select an option</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </Select>
        </Text>
        <Text>
          Search:
          <Input />
        </Text>
      </Flex> */}

      <Box width="100%" margin="auto" h="auto" bg="black">
        {cartData.length == 0 ? (
          <Flex fontSize="30px" justifyContent="center">
            <Text color="white">Cart is Empty</Text>
          </Flex>
        ) : (
          cartData?.map((cartItem) => (
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
                  {cartItem.treatement}
                </Text>
                <Text>
                  <b>Add Booster :</b>
                  {cartItem.addBooster}
                </Text>
                <Text>
                  <b>Service Location :</b>
                  {cartItem.location}
                </Text>
                <Text>
                  <b>Booking Time :</b>
                  {cartItem.schedule}
                </Text>
              </VStack>
              <VStack color="white" width="33%">
                <Text>Price : ${cartItem.price}</Text>
                <Button
                _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
                  onClick={() => deleteCartData(cartItem.id)}
                  variant="outline"
                  color="White"
                >
                  Cancel Appointment
                </Button>
              </VStack>
            </Flex>
          ))
        )}

        {cartData.length == 0 ? null : (
          <Box
            textAlign="left"
            fontSize="50px"
            p="30px"
            margin="auto"
            width="80%"
          >
            <Text color="white">Cart Total</Text>
          </Box>
        )}

        {cartData.length == 0 ? null : (
          <TableContainer width="80%" margin="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white">SubTotal</Th>
                  <Th color="white">Service Charge</Th>
                  <Th color="white" isNumeric>
                    Total Price
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td color="white">${calculateTotalPrice()}</Td>
                  <Td color="white">${50}</Td>
                  <Td color="white" isNumeric>
                    ${calculateTotalPrice() + 50}
                  </Td>
                </Tr>
              </Tbody>
              {/* <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th isNumeric color="white">
                  multiply by
                </Th>
              </Tr>
            </Tfoot> */}
            </Table>
          </TableContainer>
        )}

        {cartData.length == 0 ? null : (
          <Link to="/checkout">
            <Button
            _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
              w="200px"
              bgGradient="linear( rgb(65,116,91), #2E5D67)"
              mt="40px"
            >
              Checkout
            </Button>
          </Link>
        )}
      </Box>

      <Footer />
    </>
  );
}
