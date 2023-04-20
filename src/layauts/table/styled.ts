import styled from 'styled-components';

interface IThead {
    color?: string;
    size?: string;
    weight?: string;
    columns: number;
    align: 'left' | 'center' | 'right';
    widthGrid: string;
}

interface ITh {
    bgColor?: string;
    isFirst: boolean;
    isLast: boolean;
}

interface ITr {
    size?: string;
    columns: number;
    align: 'left' | 'center' | 'right';
    widthGrid: string;
}

export const Container = styled.section`
    border: 1px solid ${props => props.theme.border};
    border-radius: 10px;

    .border-radius {
        border-radius: 20px;
    }

    .container-table {
        overflow-x: scroll;
    }

    .btn-table {
        width: 25px;
        padding: 2px 5px !important;
        
        span {
            font-size: 12px;
        }
    }

    .paginate {
        @media (max-width: 425px) {
            flex-direction: column;
            align-items: center !important;

            p {
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }
`;

export const Thead = styled.article<IThead>`
    color: ${props => props.color ?? props.theme.thText};
    font-size: ${props => props.size ?? '16px'};
    font-weight: ${props => props.weight ?? 'bold'};
    border-radius: 5px;

    display: grid;
    grid-template-columns: ${props => `repeat(${props.columns}, ${props.widthGrid})`};
    text-align: ${props => props.align};
`;

export const TBody = styled.article`

`;

export const Tr = styled.div<ITr>`
    color: ${props => props.theme.secondary};
    font-size: ${props => props.size ?? '16px'};
    text-align: ${props => props.align};
    display: grid;
    grid-template-columns: ${props => `repeat(${props.columns}, ${props.widthGrid})`};
`;

export const Th = styled.div<ITh>`
    background-color: ${props => props.bgColor ?? props.theme.th};

    ${props => props.isFirst ? `border-top-left-radius: 5px;     border-bottom-left-radius: 5px;` : ''};
    ${props => props.isLast ? `border-top-right-radius: 5px;     border-bottom-right-radius: 5px;` : ''};
`;

export const Td = styled.div`

`;

export const BoxNumberPaginate = styled.div<{ isCurrent: boolean; }>`
    border-radius: 3px;
    cursor: pointer;
    width: 25px;
    padding: 2px 5px;
    font-size: 12px;
    text-align: center;
    margin: 0 1px;
    transition: .2s ease-in-out color, .2s ease-in-out background-color;

    ${
        props => props.isCurrent
        ? `
            color: white;
            background-color: ${props.theme.button};
            box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        ` : `
            background-color: transparent;
            color: black;
        `
    }

    &:hover {
        color: white;
        background-color: ${props => props.theme.button};
        filter: brightness(0.9);
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    }
`;