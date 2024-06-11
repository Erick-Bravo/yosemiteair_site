import { Box, Flex, Text } from "@chakra-ui/react";


const NavBar = () => {
    return (
      <Flex
        bg="teal"
        w="100vw"
        h="80px"
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
      >
        <Box fontSize="40px" fontFamily="sans-serif" fontWeight="bold">
          Yosemite Air
        </Box>
        <Text fontSize="20px">
          Heating and Air Conditioning Services for all of the Inland Empire
        </Text>
        <Box fontSize="40px">909 354 6272</Box>
      </Flex>
    );
}

export default NavBar;