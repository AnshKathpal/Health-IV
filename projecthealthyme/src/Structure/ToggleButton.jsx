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

export function ToggleButton(loginStatus, userData) {
  const check = loginStatus.userData;
  console.log("check", check);

  console.log("status",loginStatus)

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
            {/* <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            /> */}
            {/* <span>Fluffybuns the Destroyer</span> */}
            <Button
              fontSize="15px"
              color="white"
              p={6}
              bg="rgb(80,133,104)"
              variant="solid"
              boxShadow="base"
              w="100%"
            >
              Logout
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
