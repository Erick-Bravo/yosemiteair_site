import { BannerText } from "@/components/Home/Banner";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

const CallButton = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%">
      <Button
        bg="#213952"
        w="200px"
        h="60px"
        fontSize="30px"
        borderRadius="15px"
      >
        <a href="tel:9097676356">Call Now</a>
      </Button>
    </Flex>
  );
};

const mobile = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="#00789E"
      h="100vh"
      border="2px solid black"
      pt="80px"
    >
      <Flex
        w="100vw"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Image src="/yoslogo.svg" alt="logo" h="250px" />
        <BannerText text="Bringing The Fresh Mountain Air" />
        <BannerText text="To The Inland Empire" />
        <BannerText text="One Home At A Time" />
      </Flex>

      <Box mt="30px">
        <CallButton />
      </Box>

      <Text fontSize="20px" m="10px 0">
        Call For A Free Diagnosis
      </Text>

      <Box bg="white" w="100%">
        <Image src="/Professional.svg" alt="ad" />
      </Box>
    </Flex>
  );
};

export default mobile;
