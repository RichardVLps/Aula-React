import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    border-radius: 1rem;
    padding-right: 1.6rem;
    max-height: 5.6rem;
    width: auto;

    background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_3};
    border: ${({theme, $isNew}) => $isNew ? `.1rem dashed ${theme.COLORS.GRAY_2}` : 'none'};
    color: ${({theme}) => theme.COLORS.GRAY_2};

    > input {
        background: transparent;
        border: none;
        
        color: ${({theme}) => theme.COLORS.WHITE};
        padding: 2rem;

        height: 5.6rem;
        width: 100%;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_2};
        }
    }

    > button {
        background: none;
        border: none;
        
        width: 2.4rem;

        svg {
            height: 100%;
            width:100%;
        }
    }

    .btn-remove {
        color: ${({theme}) => theme.COLORS.RED};
    }

    .btn-add {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`

