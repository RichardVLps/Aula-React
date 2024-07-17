import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div `
    display: flex;
    align-items: stretch;

    height: 100vh;
`

export const Form = styled.form `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 0 13.6rem;

    height: 100vh;

    h1 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_2};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > button {
        margin: 1.6rem 0 12.4rem;
    }

`

export const Backgrond = styled.div `
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`