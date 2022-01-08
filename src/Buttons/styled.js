import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    @media(max-width: 767px){
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: ${({ theme }) => theme.color.mosque};
    }

    &:active {
        color: ${({ theme }) => theme.color.silver};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;
