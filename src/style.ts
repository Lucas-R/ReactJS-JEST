import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        height: 100%;
    }

    a{
        text-decoration: none;
    }
`