
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";
import { store } from "./redux-store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <Provider store={store}>
               <ChakraProvider theme={theme}>
                    <App />
                    {/* <h1>Hello</h1> */}
               </ChakraProvider>
          </Provider>
     </React.StrictMode>
);


