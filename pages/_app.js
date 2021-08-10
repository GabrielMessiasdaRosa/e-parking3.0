import { ChakraProvider} from "@chakra-ui/react";
import theme from './theme'
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
