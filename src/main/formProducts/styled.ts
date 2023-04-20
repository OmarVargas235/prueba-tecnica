import styled from "styled-components";

export const Container = styled.section`
    .modal {
        width: 700px;
        
        @media (max-width: 768px) {
            width: 450px;
        }

        @media (max-width: 460px) {
            width: 350px;
        }

        @media (max-width: 360px) {
            width: 90%;
        }
    }
`;