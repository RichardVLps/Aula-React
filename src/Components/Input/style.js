import styled from "styled-components";

export const Container = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .8rem;
    padding-left: 1.6rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};
    color: ${({theme}) => theme.COLORS.GRAY_1};
    border-radius: 1rem;
    width: 100%;

    > input {
        background-color: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};

        border:none;
        font-size: 1.4rem;
        margin: 0 1rem;

        height: 5.6rem;
        width: 100%;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_1};

        }

    }
    
    > svg {
        margin-right: .5rem;
    }
`