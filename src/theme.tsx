import { extendTheme } from "@chakra-ui/react";
import AuthButton from "./ChakraStylesConfig/AuthButton";

const Theme = extendTheme({
    components:{
        AuthButton
    },
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Roboto', sans-serif`,
      },
})

export default Theme