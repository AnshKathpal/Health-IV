import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack, HStack, VStack } from "@chakra-ui/react";
import { Logo } from "../Structure/Logo";
import Login from "../pages/Login";
import { useState } from "react";

const links = [
  {
    path: "/",
    title: "TREATMENTS",
  },
  {
    path: "/blogs",
    title: "BLOGS",
  },
  {
    path: "/aboutus",
    title: "ABOUT US",
  },
  {
    path: "/contact",
    title: "CONTACT",
  },
  {
    path: "/pressarticles",
    title: "PRESS ARTICLES",
  },
  {
    path: "/cart",
    title: "CART",
  },
];

export function Navbar() {

  const [loginStatus, setLoginStatus] = useState(false);

  console.log(loginStatus);


  const defaultStyle = {
    color: "White",
  };

  const activeStyle = {
    color: "Black",
  };

  return (
    <Box
      // border="1px solid red"
      bg="rgb(65,116,91)"
      w="100%"
      p={4}
      color="black"
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Logo border="1px solid red" />
        </Box>
        <Spacer />
        <ButtonGroup>
          {links.map((item) => {
            return (
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                key={item.path}
                to={item.path}
              >
                <Button
                  fontSize="12px"
                  p={6}
                  bg="rgb(80,133,104)"
                  variant="solid"
                  boxShadow="base"
                >
                  {item.title}
                </Button>
              </NavLink>
            );
          })}

{loginStatus ? (
        // <Notices userData={loginStatus} isLoggedIn={(e) => setLoginStatus(e)} />
        
        <Button  fontSize="12px"
        color = "white"
        p={6}
        bg="rgb(80,133,104)"
        variant="solid"
        boxShadow="base" userData={loginStatus} isLoggedIn={(e) => setLoginStatus(e)}>
{loginStatus.name}
        </Button>
        // <h1 userData={loginStatus} isLoggedIn={(e) => setLoginStatus(e)}>{loginStatus.name}</h1>
      ) : (
        <Login  isLoggedIn={(e) => setLoginStatus(e)} />
      )}


         
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
