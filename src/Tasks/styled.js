import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background-color 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            background-color: ${({ theme }) => theme.color.limeGreen};
        }

        &:active {
            background-color: ${({ theme }) => theme.color.pastelGreen};
        }
    `}
    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};

    &:hover {
        background-color: ${({ theme }) => theme.color.amaranth};
    }

    &:active {
        background-color: ${({ theme }) => theme.color.darkPink};
    }
    `}
`;
