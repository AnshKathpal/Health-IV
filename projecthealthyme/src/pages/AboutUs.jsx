import { useParams } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

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
import AnchorLink from "react-anchor-link-smooth-scroll";

export function AboutUs() {
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
            About
          </Text>
        </Flex>
      </Container>

      <Container bg="black" maxW="100%">
        <Box fontSize="22px" width="80%" margin="auto">
          <Text color="white">
            HealthIV, the digital healthcare company focused on improving home
            health outcomes through technology, now brings its in-home infusion
            therapy services to the Los Angeles Metro Area. Helmed in Los
            Angeles by Shawn Ankari, HealthIV's Co-Founder and Business
            Development Director, HealthIV's new availability for Angelenos is
            part of the company's ongoing dedication to changing up the home
            healthcare space by focusing on full digital interoperability
            between patients, doctors, pharmacists, and home healthcare workers.
          </Text>
          <Text mt="20px" color="white">
            HealthIV's infusions treat everything from light dehydration and the
            occasional hangover to symptoms of chronic illnesses, such as asthma
            and fibromyalgia. Additionally, the company's team of registered
            nurses work 24/7 to provide top-of-the-line at-home care, with Los
            Angeles residents, visitors, and health care practitioners all able
            to schedule in-home infusion therapy treatments quickly and easily
            online.
          </Text>
          <Text mt="20px" color="white">
            "Infusion therapy can be extremely beneficial to many people, but
            its mainstream adoption has met with numerous challenges," said
            Shawn Ankari, Co-Founder and Business Development Director of
            HealthIV. "HealthIV's mission is to simply provide patients with IV
            therapy in the comfort of their own home at an affordable price. Our
            infusions deliver 100 percent of the vitamins directly into your
            blood stream, making it quicker and easier for your body to use
            those nutrients to support your metabolism and overall health."
          </Text>
          <Text mt="20px" color="white">
            "The arrival of HealthIV in the Los Angeles market is part of the
            larger goal to expand our footprint within the Western U.S.'" said
            Humza Khan, CEO of HealthIV. "This comes on the heels of our recent
            availability in Las Vegas and Austin, which was built on our
            long-established presence in New York, New Jersey and Miami. But no
            matter which city you're in, our IV therapies are quick and
            effective – typically only taking 25 to 45 minutes to administer –
            and with the benefits felt soon after the infusions begin."
          </Text>
          <Text mt="20px" color="white">
            HealthIV's expansion into the Los Angeles market follows its
            successful launch in Las Vegas in November 2021. For a list of
            current locations, visit HealthIV.com. To book your HealthIV therapy
            appointment, visit the online portal or call (877) 381-2190.
          </Text>
          <Text mt="20px" color="white">
            About HealthIV Health IV is a mobile infusion therapy company
            striving to make healthcare more affordable and accessible. HealthIV
            was founded in 2020 to answer the nationwide call for
            higher-quality, lower-cost healthcare. The company currently offers
            on-site and in-home ambulatory healthcare and infusion therapies
            with registered medical professionals, and is working towards the
            launch of digital and mobile products that will introduce
            unprecedented interoperability to the healthcare space, forever
            changing the face of home healthcare, and giving patients a greater
            share of voice in their care as they coordinate with doctors,
            hospitals, pharmacies, and home healthcare providers. For more
            information, or to book your own infusion therapies, visit
            www.healthiv.com.
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
