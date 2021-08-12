import { ChakraProvider } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
