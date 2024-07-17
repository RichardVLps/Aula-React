import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    width: 100%;

    > header {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};

        display: flex;
        align-items: center;

        height: 14.4rem;
        width: 100%;

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_2};
            font-size: 5rem;

            margin-left: 14.4rem;
            cursor: pointer;
        }
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    max-width: 33.8rem;

    div:nth-child(2) {
        margin-bottom: 2.4rem;
    }
`

export const Avatar = styled.div `
    position: relative;

    display: flex;
    justify-content: center;
    top: -9.3rem;
    
    height: 18.6rem;
    width: 18.6rem;
    margin: 0 auto;

    > img {
        position: absolute;
        border-radius: 50%;
        height: 18.6rem;
    }

    > label {
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 4.8rem;
        width: 4.8rem;

        position: absolute;
        bottom: .7rem;
        right:  .7rem;

        svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_3};
            height: 2rem;
            width: 2rem;
        }
        
        input {
            display: none;
        }
    }
    

`