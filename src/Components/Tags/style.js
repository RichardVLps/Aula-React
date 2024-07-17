import styled from "styled-components";

export const Container = styled.span `
    background: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_3};

    border-radius: .5rem;
    font-size: 1.2rem;
    padding: .5rem 1.4rem;

    margin-right: .6rem;
`