import styled from "styled-components";

export const Container = styled.button `
    background: transparent;
    border: none;
    color: ${({theme, $isActive}) => $isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_2};

    font-size: 1.6rem;

    height: 2.1rem;
`