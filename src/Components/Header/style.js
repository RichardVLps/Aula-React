import styled from "styled-components";

export const Container = styled.header `
    grid-area: "header";

    align-items: center;
    height: 10.6rem;
    padding: 0 8rem;
    width: 100%;

    display: flex;
    justify-content: space-between;

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_1};
`

export const Profile = styled.div `

    align-items: center;
    display:flex;
    gap: .9rem;
    color: ${({theme}) => theme.COLORS.GRAY_2};
    cursor: pointer;


    strong {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.8rem;
    }

    img {
        border-radius: 50%;
        height: 7rem;
        width: 7rem;
    }
`

export const Logout = styled.button `
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.GRAY_2};
    font-size: 3.6rem;
`