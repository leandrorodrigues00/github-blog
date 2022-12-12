import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
    }

    a{
    text-decoration: none;
    }


    body{
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        line-height: 160%;
   
    }
`;
