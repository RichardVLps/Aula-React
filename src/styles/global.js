import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};
        -webkit-font-smoothing: antialiased;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size:1.6rem;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .4s;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`