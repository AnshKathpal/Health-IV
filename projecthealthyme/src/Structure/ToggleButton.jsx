import Profile from "../Images/profilepic.png"
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useState, useContext } from "react";
export function ToggleButton(loginStatus, userData) {
  const check = loginStatus.userData;
  console.log("check", check);

  console.log("status",loginStatus)

  const { isAuth, setIsAuth, logout, authState, setIsAuthState, loginUser } =
  useContext(AuthContext);


  console.log("isAuth", isAuth)

  return (
    <>
      <Menu>
        <MenuButton
          fontSize="12px"
          color="white"
          p={6}
          bg="rgb(80,133,104)"
          variant="solid"
          boxShadow="base"
          userData={loginStatus}
          as={Button}
          //   rightIcon={<ChevronDownIcon />}
        >
          {check.name}
        </MenuButton>
        <MenuList bg="rgb(80,133,104)">
          <MenuItem bg="rgb(80,133,104)" maxH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={Profile}
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            {/* <span>Fluffybuns the Destroyer</span> */}
            <Button
              fontSize="15px"
              color="white"
              p={6}
              bg="rgb(80,133,104)"
              variant="solid"
              boxShadow="base"
              w="100%"
              onClick={logout}
            >
              Logout
            </Button>
            
            <Link to="/appointments">
            <Button
              fontSize="15px"
              color="white"
              p={6}
              bg="rgb(80,133,104)"
              variant="solid"
              boxShadow="base"
              w="100%"
            >
              My Appointments
            </Button>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
