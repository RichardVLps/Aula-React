import styled from "styled-components";

export const Container = styled.button `
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1};


    text-align: start;
    border: none;
    border-radius: 1rem;
    padding: 1.6rem 2.2rem;
    margin: 2.4rem 0 1.6rem;

    transition: .4s ease;
    width: 100%;

    >h1 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2.4rem;
    }

    &:hover {
        filter: brightness(.95);
        scale: 1.009;
    }
`

