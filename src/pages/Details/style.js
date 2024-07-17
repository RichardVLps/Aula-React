import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";

    >main {
        grid-area: content;
    }
`

export const Content = styled.div `
    grid-area: content;
    margin: 0 auto;
    max-width: 58rem;

    display: flex;
    flex-direction: column;

    >button:first-child {
        align-self: end;
        margin: 6.5rem 0;
    }

    >button:last-child {
        margin-top: 10rem;
    }

    h1 {
        font-size: 3.6rem;
    }

    p {
        text-align: justify;
        margin: 1.6rem 0 5.4rem 0;
    }
`