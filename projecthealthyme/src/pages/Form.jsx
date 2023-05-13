import { useState, useReducer, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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

// import Calendar from 'moedim';

const initialState = {
  location: "",
  address: "",
  treatement: "",
  addBooster: "",
  schedule: "",
  price : "199"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Update_location": {
      return {
        ...state,
        location: action.payload,
      };
    }
    case "UpdateAddress": {
      return {
        ...state,
        address: action.payload,
      };
    }
    case "Update_treatement": {
      return {
        ...state,
        treatement: action.payload,
      };
    }
    case "Update_Booster": {
      return {
        ...state,
        addBooster: action.payload,
      };
    }
    case "Update_schedule": {
      return {
        ...state,
        schedule: action.payload,
      };
    }
    case "Update_form": {
      return {
        // ...state,
        // cartItems : [...state.cartItems, action.payload]
        ...initialState,
      };
    }
    default:
      throw new Error(`actiontype ${action.type} not supported`);
  }
};

export function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  

  // const [submittedData, setSubmittedData] = useState([]);

  const {submittedData, setSubmittedData} = useContext(AuthContext);

  console.log("state",state);
  console.log("data" , submittedData);

  const updateForm = (e) => {
    e.preventDefault();


    console.log("state",state)
      return axios({
        method: "post",
        url: `https://645d3ca0e01ac61058a06daf.mockapi.io/cart`,
        data: state,
      }).then((res)=>{
        console.log(res);
        dispatch({
          type : "Update_form",
          price : "199"
        })
        
        navigate("/cart")
      })



    // const userCart = {
    //   location,
    //   address,
    //   treatement,
    //   addBooster,
    //   schedule
    // };

    // try {
    //   const response = await fetch(
    //     `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         location,
    //         address,
    //         treatement,
    //         addBooster,
    //         schedule
    //       }),
    //     }
    //   );

    //   const savedCart = await response.json();
    //   console.log(savedCart);

    // } catch (error) {
    //   console.error("Error:", error);
    // }

    setSubmittedData([...submittedData, state]);


    console.log("submitted" ,submittedData)

    dispatch({
      type: "Update_form",
    });

    console.log(state);
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
          height="750px"
          width="60%"
          // border="1px solid red"
          margin="auto"
        >
          <Text color="white" fontWeight="bolder" fontSize="60px">
            BECOME A MEMBER AND BOOK YOUR FIRST MONTH
          </Text>
          <Text mt="20px" color="white" fontWeight="bolder" fontSize="40px">
            $199
          </Text>
          <Text mt="20px" color="white" fontSize="30px">
            Become a member and get 34% off a treatment each month.
          </Text>
          <AnchorLink href="#bookingForm">
            <Button
            _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
              mt={20}
            >
              Book Now
            </Button>
          </AnchorLink>
        </Flex>
      </Container>
      <Container p="20px" bg="black" maxW="100%" h="auto" id="bookingForm">
        <Text mb="10px" mt={12} color="white" fontSize="60px">
          Fill out the form below to book your session
        </Text>

        <form  onSubmit={updateForm}>

        
        <FormControl isRequired
          p="40px"
          border="2px solid white"
          w="80%"
          margin="auto"
        >
          <FormLabel color="white" fontSize="50px">
            1. Location
          </FormLabel>
          <Text color="white" textAlign="left" fontSize="20px">
            We come to you. Let’s make sure you’re in our service area.
          </Text>
          <Box mt={17}>
            <Text color="white" textAlign="left" fontSize="20px">
              Service Location
            </Text>
            <Select
              color="white"
              value={state.location}
              onChange={(e) => {
                dispatch({ type: "Update_location", payload: e.target.value });
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
          </Box>
          <FormLabel color="white" mt={10} fontSize="50px">
            2. Address
          </FormLabel>
          <Textarea
            color="white"
            value={state.address}
            onChange={(e) => {
              dispatch({ type: "UpdateAddress", payload: e.target.value });
            }}
            required
          ></Textarea>
          <FormLabel color="white" mt={10} fontSize="50px">
            3. Treatement
          </FormLabel>
          <Box mt={17}>
            <Text color="white" textAlign="left" fontSize="20px">
              First Month's Treatement
            </Text>
            <Select
              color="white"
              value={state.treatement}
              onChange={(e) => {
                dispatch({
                  type: "Update_treatement",
                  payload: e.target.value,
                });
              }}
              required
            >
              <option value="">Select an Option</option>
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
          </Box>
          <FormLabel color="white" mt={10} fontSize="50px">
            4. Add-On's
          </FormLabel>
          <Text color="white" textAlign="left" fontSize="20px">
            Upgrade your treatment with an IV booster supplement or a COVID
            test.
          </Text>
          <Box mt={17}>
            <Text color="white" textAlign="left" fontSize="20px">
              Add Booster
            </Text>
            <Select
              color="white"
              value={state.addBooster}
              onChange={(e) => {
                dispatch({ type: "Update_Booster", payload: e.target.value });
              }}
              required
            >
              <option value="">Select an Option</option>
              <option value="B-complex">B-complex</option>
              <option value="Gultathione">Gultathione</option>
              <option value="Zinc">Zinc</option>
              <option value="Vitamin B-12">Vitamin B-12</option>
              <option value="Biotin">Biotin</option>
            </Select>
          </Box>

          <FormLabel color="white" mt={10} fontSize="50px">
            4. Schedule
          </FormLabel>
          <Box mt={17}>
            <Text color="white" textAlign="left" fontSize="20px">
              Select a time for your hour long session.
            </Text>
            <Input
              color="white"
              type="datetime-local"
              value={state.schedule}
              onChange={(e) => {
                dispatch({ type: "Update_schedule", payload: e.target.value });
              }}
              required
            />
          </Box>

          <Button
            fontSize="20px"
            color="white"
            bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)"
            w="100%"
            mt={10}
            type="submit"
            _hover={{boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
           
          >
            Continue to Cart
          </Button>
        </FormControl>
        </form>
      </Container>
      <Footer />
    </>
  );
}
