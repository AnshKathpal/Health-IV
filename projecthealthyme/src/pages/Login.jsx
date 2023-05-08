import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";

function Login({ isLoggedIn }) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      // backdropInvert="20%"
      backdropBlur="10px"
    />
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch(`http://localhost:8080/users`);
    let data = await res.json();
    console.log(data);

    const users = data;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("LoggedIn");
      isLoggedIn(user);
      await navigate("/");
    } else {
      console.log("error");
      setLoginStatus(false);
    }

    


  };

  useEffect(()=>{
    handleSubmit() 
  },[])

  return (
    <>
      <Button
        // ml="4"
        fontSize="12px"
        p={6}
        bg="rgb(80,133,104)"
        variant="solid"
        boxShadow="base"
        color = "white"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Login
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent color="black">
          <ModalHeader width="100%" color="white" bg="black">
            Login
          </ModalHeader>
          <ModalCloseButton color="white" />
          {/* <ModalBody>
                <Text>Custom backdrop filters!</Text>
              </ModalBody> */}
          {/* <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter> */}

          <FormControl bg="black" p={10} margin="auto">
            <FormLabel fontSize="20px" color="white">
              Email
            </FormLabel>
            <Input
              type="text"
              name="username"
              color="white"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormLabel fontSize="20px" color="white">
              Password
            </FormLabel>
            <Input
              type="password"
              color="white"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
            </InputRightElement> */}
            {/* <Input type = "submit" /> */}
            <Button
              bgGradient="linear( rgb(51,99,100), rgb(167,210,137))"
              mt={5}
              width="100%"
              onClick={handleSubmit}
            >
              Login
            </Button>

            <p bg="white">
              If not an existing user <Link to="/signup">SignUp</Link>{" "}
            </p>
            {loginStatus == false ? <p color="white">Invalid</p> : null}
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
