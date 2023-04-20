// 1.- Librerias
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { BiLoaderCircle } from "react-icons/bi";

// 2.- redux
import { RootState } from '../../redux/store';
import { IInitState } from '../../redux/reducers/reducerBlockUI';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.section`
    background-color: #1E1E1E;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1100;

    .icon {
        animation: ${rotate} 2s linear infinite;
    }
`;

interface Props {
    isLoading?: boolean;
}

const Spinner = ({ isLoading=false }: Props): JSX.Element => {

    const { isActive } = useSelector<RootState, IInitState>(state => state.blockUI);

    return <>
        {
            ( isLoading || Boolean(isActive) )
            ? <Container>
                <BiLoaderCircle
                    fontSize={100}
                    color="white"
                    className='icon'
                />
            </Container> : null
        }
    </>;
}

export default Spinner;