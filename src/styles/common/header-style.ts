import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 12.5vh;
    width: 100vw;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 9.1vw;

    width: 106px;
    height: 416px;
`;

export const HeaderDot = styled.div`
    width: 2.19rem;
    height: 2.19rem;
    border: 1px solid;
    border-radius: 50%;
    margin-bottom: 12px;

    background: black;

    cursor: pointer;
    &:hover {
        background-color: white;
        border: 1px solid;
        border-color: black;
        transition: 0.3s;
    }
`;

export const MyName = styled.span`
    position: fixed;
    left: 86.5vw;
    top: 8.1vh;

    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-weight: 300;
    font-size: 1.31rem;
`;

export const HomeDot = styled.div`
    width: 2.19em;
    height: 2.19em;
    border: 1px solid;
    border-radius: 50%;
    margin-right: 9.1vw;

    background: black;

    cursor: pointer;
    &:hover {
        background-color: white;
        border: 1px solid;
        border-color: black;
        transition: 0.3s;
    }
`;

export const HeaderMenuItem = styled(Link)`
    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-weight: 300;
    font-size: 1.31rem;
    line-height: 1.88rem;
    text-decoration-line: none;

    color: #000000;

    &:hover {
        font-family: "NotoSansKROTFRegular";
    }

    &.check {
        font-family: "NotoSansKROTFRegular";
    }
`;
