import { Container, Box, Text } from "@chakra-ui/react";

export function Containers({ maxW, p, border, bgGradient, bg, text,box }) {
  return (
    <Container
      maxW={maxW}
      p={p}
      border={border}
      bgGradient={bgGradient}
      bg={bg}
    >
      <Text>{text}</Text>
      <Box>{box}</Box>
    </Container>
  );
}
