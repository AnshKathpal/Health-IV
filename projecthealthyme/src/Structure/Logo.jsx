import { Box,Image } from "@chakra-ui/react";
import logoImage from "../Images/logo.png";

export function Logo({border,width}){
    return (
        <Box border={border} width={width}>
            <h1>HealthIV</h1>
        </Box>
    )
}