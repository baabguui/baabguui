import styled from "styled-components";

export const YearContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 80vw;
    height: 80vh;
    overflow: scroll;

    position: fixed;
    top: 16vh;
    left: 19vw;
`;

export const MenuContainer = styled.div`
    position: fixed;
    top: 16vh;
    left: 19vw;
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.span`
    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.88rem;
    cursor: pointer;

    &.check {
        font-family: "NotoSansKROTFRegular";
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 70vh;
    align-items: flex-start;

    margin-left: 15vw;
`;

export const ImageItem = styled.img`
    width: 50vw;
    height: auto;

    margin-bottom: 10px;

    object-fit: scale-down;
`;
