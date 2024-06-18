import { ChakraProvider, ThemeProvider, extendTheme } from "@chakra-ui/react";
// import { ThemeProvider } from "@chakra-ui/core"
import { Html, Head, Main, NextScript } from "next/document";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "390px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ChakraProvider theme={theme}>
            <Main />
            <NextScript />
        </ChakraProvider>
      </body>
    </Html>
  );
}
