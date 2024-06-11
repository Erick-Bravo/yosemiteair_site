import { BannerText } from "@/components/Home/Banner";
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
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="#00789E"
      h="100vh"
    >
      <Flex w="100vw" h="100%" justifyContent="center" alignItems="center" flexDir="column">
        <Image src="/yoslogo.svg" alt="logo" h="250px" />
        <BannerText text="Bringing The Fresh Mountain Air" />
        <BannerText text="To The Inland Empire" />
        <BannerText text="One Home At A Time" />
      </Flex>

      <CallButton />

      <Text fontSize="25px" m="30px 0">
        Call for a free diagnosis
      </Text>

      <Box bg="white" w="100%">
        <Image src="/Professional.png" alt="ad" />
      </Box>
    </Flex>
  );
};

export default mobile;
