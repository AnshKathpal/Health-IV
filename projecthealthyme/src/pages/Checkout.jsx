import { useState, useReducer, useContext, useMemo } from "react";

import countryList from "react-select-country-list";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
import { useEffect } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { Footer } from "../Structure/Footer";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  phoneNo: "",
  country: "",

  // treatement: "",
  // addBooster: "",
  // schedule: "",
  // price: "",
  // image: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Update_firstname": {
      return {
        ...state,
        firstname: action.payload,
      };
    }
    case "Update_lastname": {
      return {
        ...state,
        lastname: action.payload,
      };
    }
    case "Update_email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "Update_address": {
      return {
        ...state,
        address: action.payload,
      };
    }
    case "Update_phoneNo": {
      return {
        ...state,
        phoneNo: action.payload,
      };
    }
    case "Update_form": {
      return {
        // ...state,
        // cartItems : [...state.cartItems, action.payload]
        ...initialState,
      };
    }
    case "Update_country": {
      return {
        ...state,
        country: action.payload,
      };
    }
    default:
      throw new Error(`actiontype ${action.type} not supported`);
  }
};

export function Checkout() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country,setCountry] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate();

  //   const [value, setValue] = useState("");
  //   const options = useMemo(() => countryList().getData(), []);

  const [checkOutData, setCheckOutData] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState({});

  // useEffect(() => {
  //   fetch(
  //     "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCountries(data.countries);
  //       setSelectedCountry(data.userSelectValue);
  //     });
  // }, []);

  const handleForm = (e) => {
    e.preventDefault();

    console.log("state", state);
    return axios({
      method: "post",
      url: `https://642537b39e0a30d92b2bb1bb.mockapi.io/checkout`,
      data: state,
    }).then((res) => {
      console.log(res.data);
      dispatch({
        type: "Update_form",
      });

      toast({
        title: 'Booking Completed',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

      navigate("/")
    });
  };

  //   const changeHandler = (value) => {
  //     setValue(value);
  //   };

  // styles = {
  //     option: (provided, state) => ({
  //       ...provided,
  //     //   fontWeight: state.isSelected ? "bold" : "normal",
  //       color: "white",
  //       backgroundColor: "black",
  //     //   fontSize: state.selectProps.myFontSize
  //     }),
  //     singleValue: (provided, state) => ({
  //       ...provided,
  //       color: "blue",
  //     //   fontSize: state.selectProps.myFontSize
  //     })
  //   };

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
            Checkout
          </Text>
        </Flex>
      </Container>

      <Container bg="black" maxW="100%">
        <Box p={10} width="70%" margin="auto" border="1px solid white">
          <Text fontSize="40px" marginBottom={10} color="white">
            Billing Details
          </Text>

          <form onSubmit={handleForm}>
            <FormControl isRequired>
              <FormLabel fontSize="20px" color="white">
                First Name
              </FormLabel>
              <Input
              required
                value={state.firstname}
                onChange={(e) => {
                  dispatch({
                    type: "Update_firstname",
                    payload: e.target.value,
                  });
                }}
                color="white"
                mb="10px"
                type="text"
              />
              <FormLabel fontSize="20px" color="white">
                Last Name
              </FormLabel>
              <Input
              required
                value={state.lastname}
                onChange={(e) => {
                  dispatch({ type: "Update_lastname", payload: e.target.value });
                }}
                color="white"
                mb="10px"
                type="text"
              />

              <FormLabel fontSize="20px" color="white">
                Email Address
              </FormLabel>
              <Input
              required
                color="white"
                mb="10px"
                type="email"
                value={state.email}
                onChange={(e) => {
                  dispatch({ type: "Update_email", payload: e.target.value });
                }}
              />

              <FormLabel fontSize="20px" color="white">
                Phone Number
              </FormLabel>
              <Input
              required
                value={state.phoneNo}
                onChange={(e) => {
                  dispatch({ type: "Update_phoneNo", payload: e.target.value });
                }}
                color="white"
                type="text"
              />

              <FormLabel fontSize="20px" color="white">
                Address
              </FormLabel>
              <Textarea
              required
                color="white"
                type="text"
                value={state.address}
              onChange={(e) => {
                dispatch({ type: "Update_address", payload: e.target.value });
              }}
              />

<FormLabel fontSize="20px" color="white">
                Country
              </FormLabel>
              <Select
              color="white"
              value={state.country}
              onChange={(e) => {
                dispatch({ type: "Update_country", payload: e.target.value });
              }}
              required
            >
              <option value="">Select an Option</option>
              <option value="New York">New York</option>
              <option value="Florida">Florida</option>
              <option value="Texas">Texas</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="California">California</option>
            </Select>
              

              <Box mt="40px">
                <FormLabel fontSize="20px" color="white">
                  Payment
                </FormLabel>

                <Flex justifyContent="flex-start" alignItems="center">
                  <Text color="white">Credit Card (Stripe)</Text>
                  <HStack ml="20px">
                    <Image
                      width="50px"
                      src="https://healthiv.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    ></Image>

                    <Image
                      width="50px"
                      src="https://healthiv.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    ></Image>

                    <Image
                      width="50px"
                      src="https://healthiv.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    ></Image>

                    <Image
                      width="50px"
                      src="https://healthiv.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/discover.svg"
                    ></Image>
                  </HStack>
                </Flex>

                <FormLabel fontSize="16px" color="white">
                  Card Number
                </FormLabel>
                <Input
                required
                  color="white"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  type="text"
                />

                <FormLabel fontSize="16px" color="white">
                  Expiry Date
                </FormLabel>
                <Input required color="white" placeholder="MM / YY" type="text" />
                <FormLabel fontSize="16px" color="white">
                  CVV
                </FormLabel>
                <Input required color="white" placeholder="xxx" type="text" />
              </Box>

              <Button
                type="submit"
                // onClick={() =>
                //   toast({
                //     title: "Order Placed",
                //     description: "We wll try to reach you soon",
                //     status: "success",
                //     duration: 2000,
                //     isClosable: true,
                //   })
                // }
                bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
                mt={5}
                width="100%"
              >
                Place Order
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
