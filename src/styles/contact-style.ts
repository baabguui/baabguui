import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;

    left: 30vw;
    top: 27.4vh;

    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-size: 1rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 42.5vw;
    height: auto;

    border: 1px solid;
    border-bottom: none;
`;

export const Label = styled.div`
    width: 7vw;
    text-align: center;
`;
export const InputEmail = styled.input`
    width: 35.6vw;
    height: 4vh;

    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: 1px solid black;

    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-size: 0.8rem;
`;
export const InputContent = styled.input`
    width: 42.5vw;
    height: 31vh;
    border: none;

    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-size: 0.8rem;
`;
export const SubmitBtn = styled.button`
    width: 7vw;
    height: 4vh;
    background-color: white;
    margin-left: 35.6vw;

    border: none;

    cursor: pointer;

    font-family: "NotoSansKROTFLight";
    font-style: normal;
    font-size: 1rem;
    &:hover {
        background-color: black;
        color: white;
    }
`;
