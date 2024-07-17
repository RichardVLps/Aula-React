import styled from "styled-components";

export const Container = styled.button `
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_2};
    font-weight: 500;

    border-radius: 1rem;
    border: none;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    
    height: 5.6rem;
    width: 100%;
    
    &:disabled {
        opacity: .5;
    }
`;