import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    width: 100%;

    .tags {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > main {
        max-width: 58.6rem;
        margin: 3.8rem auto;
    }
`

export const Form = styled.div `
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;
    }

    :nth-child(3) {
        height: 15rem;
    }

    > textarea {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};
        color: ${({theme}) => theme.COLORS.WHITE};
        border-radius: 1rem;
        border: none;
        
        padding: 2rem;
        resize: none;

        width: 100%;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_1}; 
        }
    }

`