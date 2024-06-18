import Banner, { BannerText } from "@/components/Home/Banner";
import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  UnorderedList,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { PhoneIcon, CheckCircleIcon } from "@chakra-ui/icons";

const CallButton = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%">
      <Flex
        bg="#213952"
        // width={{ base: "200px", sm: "400px" }}
        w="200px"
        // h={{ base: "40px", sm: "60px" }}
        h="44px"
        fontSize="25px"
        borderRadius="15px"
        justifyContent="center"
        alignItems="center"
      >
        <PhoneIcon h="15px" />
        <a href="tel:9097676356"> Call Now</a>
      </Flex>
    </Flex>
  );
};

const BannerMobile = () => {
  return (
    <Box
      position="relative"
      width="100%"
      h="350px"
      backgroundImage="url('/cucamobile.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        h="100%"
        bg="white"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
      >
        <Flex
          w="100vw"
          justifyContent="center"
          alignItems="center"
          h="100%"
          flexDir="column"
          p="40px 20px"
        >
          <Image src="/yoslogo.svg" alt="logo" w={["50%"]} />
          <BannerText text="Bringing The Fresh Mountain Air" />
          <BannerText text="To The Inland Empire" />
          <BannerText text="One Home At A Time" />
        </Flex>
      </Flex>
    </Box>
  );
};

const BannerGarauntee = () => {
  return (
    <Box
      position="relative"
      width="100%"
      h="340px"
      mt="40px"
      backgroundImage="url('/protech.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        h="100%"
        bg="white"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
      >
        <Flex
          w="100vw"
          justifyContent="center"
          alignItems="center"
          h="100%"
          flexDir="column"
          p="40px 20px"
        >
          <BannerText text="Cheaper and more reliable than" />
          <BannerText text="the corporate guys gauranteed" />
        </Flex>
      </Flex>
    </Box>
  );
};

const mobile = () => {
  return (
    <Flex
      bg="#00789E"
      h={{ base: "900px", sm: "100vh" }}
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <BannerMobile />

      <Box mt="40px">
        <List fontWeight="bold">
          <ListItem>
            <ListIcon as={CheckCircleIcon} mr="15px" />
            Repairs
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} mr="15px" />
            Maintenence
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} mr="15px" />
            Tune-up $50
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} mr="15px" />
            Ductwork Inspection
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} mr="15px" />
            Efficiency Evaluation
          </ListItem>
        </List>
      </Box>

      {/* <Flex
        w="260px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="40px"
      >
        <BannerText text="Cheaper and more reliable than the corporate guys" />
        <BannerText text="gauranteed" />
      </Flex> */}

      <Flex mt="50px" alignItems="center">
        <CallButton />
      </Flex>

      <Text fontSize="20px" m="10px 0">
        Call For A Free Diagnosis
      </Text>

      <BannerGarauntee />

      <Flex alignItems="center" flexDir="column">
        <Flex mt="50px" alignItems="center">
          <CallButton />
        </Flex>

        <Text fontSize="20px" m="10px 0">
          Call For A Free Diagnosis
        </Text>

        <Box bg="white" w="100%" mt="40px">
          <Image src="/ProfessionalUpdated.svg" alt="ad" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default mobile;
