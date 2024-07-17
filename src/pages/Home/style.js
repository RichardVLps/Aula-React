import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.6rem 12.8rem auto 6.4rem;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnotes content";

    width: 100%;
    height: 100vh;
`

export const Brand = styled.div`

    grid-area: brand;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};
    color: ${({theme}) => theme.COLORS.ORANGE};

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_1};
` 

export const Menu = styled.ul`
    grid-area: menu;
    text-align: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};

    padding-top: 6.4rem;

    >li {
        color: ${({theme}) => theme.COLORS.GRAY_2};
        margin-bottom: 2.4rem;
    }
` 

export const Search = styled.div`
    grid-area: search;
    margin: 6.4rem;
` 

export const Content = styled.div`
    grid-area: content;
    margin: 3rem 6.4rem;
`

export const NewNotes = styled(Link)`
    grid-area: newnotes;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;   
    color: ${({theme}) => theme.COLORS.BACKGROUND_3};

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    border: none;
    font-size: 2rem;
`