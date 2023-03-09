import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    color: yellow;
`;

export const HeaderDot = styled.button`
    width: 5px;
    height: 5px;
    color: black;
`;

export const HomeDot = styled.div`
    width: 35px;
    height: 35px;
    background: black;
    cursor: pointer;
`;

export const HeaderMenuItem = styled(Link)`
    color: blue;
    text-align: center;
`;
