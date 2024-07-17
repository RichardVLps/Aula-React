import styled from "styled-components";

export const Container = styled.section `
    width: 100%;

    h2 {
        color: ${({theme}) => theme.COLORS.GRAY_2};
        border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_1};
        font-weight: 400;

        padding: 2.8rem 0 1.6rem;
        margin-bottom: 1.6rem;
    }

    ul {
        margin-top: 1.6rem;
    }

    li {
        color: ${({theme}) => theme.COLORS.WHITE};
        list-style-type: none;
        margin-bottom: 1.2rem; 
    }
`