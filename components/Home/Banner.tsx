import { Box, Flex, Text, Image } from '@chakra-ui/react'

interface BannerPropTypes {
  text: string;
}

export const BannerText: React.FC<BannerPropTypes> = ({ text }) => {
  return (
    <Text
      fontSize={[15, 45]}
      fontWeight="bold"
      color="white"
      textAlign="center"
      textShadow="1px 1px 2px black"
    >
      {text}
    </Text>
  );
};
 
const Banner = () => {
 
  return (
    <Box
      position="relative"
      width="100%"
      height="430px"
      backgroundImage="url('/cuca.jpeg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="430px"
        bg="white"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
      >
        <Image src="./yoslogo.svg" alt="Logo" mb={4} height="400px" />
        <Flex flexDir="column" pl="40px">
          <BannerText text="Bringing The Fresh Mountain Air" />
          <BannerText text="To The Inland Empire" />
          <BannerText text="One Home At A Time" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Banner;

