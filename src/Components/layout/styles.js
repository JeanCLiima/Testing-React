import styled from "styled-components";

export const Card = styled.div`
    flex: 1;
    margin: 20px;
    border: 3px solid #000;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    min-width: 300px;
`;

export const Conteudo = styled.div`
    flex: 1;
    padding: 15px 0;
    color: #000;
`;

export const Footer = styled.div`
    background-color: #000;
    color: #fff;
    padding: 10px 0;
`;