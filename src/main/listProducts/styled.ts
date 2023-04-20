import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;

    .add, .refresh {
        @media (max-width: 768px) {
            font-size: 10px;
            margin: 0;
        }
    }

    .add {
        @media (max-width: 378px) {
            margin-bottom: 10px;
            margin-right: 0 !important;
        }
    }

    .search {
        @media (max-width: 768px) {
            width: 34%;
        }

        @media (max-width: 575px) {
            width: 100%;
            margin-bottom: 20px;
        }
    }

    .container-buttons {
        @media (max-width: 378px) {
            flex-direction: column;
        }
    }

    @media (min-width: 1700px) {
        width: 67vw;
    }

    @media (min-width: 2000px) {
        width: 57vw;
    }

    @media (min-width: 2300px) {
        width: 50vw;
    }

    @media (min-width: 2600px) {
        width: 44vw;
    }
`;

export const ContainerIconAction = styled.div<{ color: string; }>`
    background-color: ${props => props.color};
    width: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;