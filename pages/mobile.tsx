import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

const CallButton = () => {
  return (
    <Button bg="#213952" w="200px" h="60px" fontSize="30px" borderRadius="15px">
      <a href="tel:9097676356">Call Now</a>
    </Button>
  );
};

const mobile = () => {
  return (
    <Box bg="#00789E" h="100vh">
      <Box bg="white" w="100%">
        <Image src="/Professional.png" alt="ad" />
      </Box>
      <Flex
        m="25px"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        
      >
        <CallButton />
        <Text fontSize="25px" m="30px 0">Call for a free diagnosis</Text>
        <Flex w="100vw" h="100%" justifyContent="center" alignItems="center">
          <Image src="/yoslogo.svg" alt="logo" h="250px" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default mobile;
