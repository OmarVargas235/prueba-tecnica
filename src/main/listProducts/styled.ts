import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;
`;

export const ContainerIconAction = styled.div<{ color: string; }>`
    background-color: ${props => props.color};
    width: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;