import { useParams } from 'react-router-dom'
import { useState, useEffect,useReducer } from 'react';

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
import AnchorLink from "react-anchor-link-smooth-scroll"

const initialState = {
    location: "",
    address: "",
    treatement: "",
    addBooster: "",
    schedule: "",
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





export function BookTreatement(){


    const [state, dispatch] = useReducer(reducer, initialState);

  const [submittedData, setSubmittedData] = useState([]);

    const {id} = useParams();
    console.log(id)


    const [data,setData] = useState([]);

  const fetchData = async() => {
    let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/treatments/${id}`)
    let data = await res.json()
    // let fetchedData = await data.products;
    setData(data);
    console.log(data);
  }

  useEffect(()=>{
    fetchData(id);
  },[id])


  const updateForm = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);

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
          width="70%"
        //   border="1px solid red"
          margin="auto"
        >
            <Image mt={-10} width="250px"  src={data.image} />
          <Text mt={-10} color="white" fontWeight="bolder" fontSize="60px">
            {data.title}
          </Text>
          <Text mt="20px" color="white" fontWeight="bolder" fontSize="40px">
            ${data.price}
          </Text>
          <Text mt="20px" color="white" fontSize="30px">
           {data.description}
          </Text>
          <AnchorLink href='#formBooking'>
          <Button  bgGradient="linear( rgb(51,99,100), rgb(167,210,137))" mt={10}>
            Book Now
          </Button>
          </AnchorLink>
        </Flex>
      </Container>

      <Container p="20px" bg="black" maxW="100%" h="auto" id="formBooking">
        <Text mb="10px" mt={12} color="white" fontSize="60px">
          Fill out the form below to book your session
        </Text>
        <FormControl
          p="40px"
          border="2px solid white"
          w="80%"
          margin="auto"
          isRequired
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
          ></Textarea>
          <FormLabel color="white" mt={10} fontSize="50px">
            3. Treatement
          </FormLabel>
          <Box mt={17}>
            <Text color="white" textAlign="left" fontSize="20px">
              First Month's Treatement
            </Text>
            <Input
              color="white"
              value={data.title}
              onChange={(e) => {
                dispatch({
                  type: "Update_treatement",
                  payload: e.target.value,
                });
              }}
           / >
              {/* <option value="">Select an Option</option>
              <option value="all">All Inclusive</option>
              <option value="hydration">Hydration</option>
              <option value="Energy Lift">Energy Lift</option>
              <option value="Recovery">Recovery</option>
              <option value="Beauty">Beauty</option>
              <option value="Immune Boost">Immune Boost</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Stomach Flu">Stomach Flu</option>
              <option value="Hangover">Hangover</option>
              <option value="Myers Cocktail">Myers Cocktail</option> */}
            {/* </Select> */}
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
              type="date"
              value={state.schedule}
              onChange={(e) => {
                dispatch({ type: "Update_schedule", payload: e.target.value });
              }}
            />
          </Box>

          <Button
            fontSize="20px"
            color="white"
            bgGradient="linear( rgb(65,116,91), #2E5D67, #000000)"
            w="100%"
            mt={10}
            onClick={updateForm}
          >
            Continue to Cart
          </Button>
        </FormControl>
      </Container>
      <Footer />

        </>
    )
}