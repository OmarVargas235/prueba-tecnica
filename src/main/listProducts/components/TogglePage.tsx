// 1.- librerias
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 2.- componentes
import { ContainerToggle } from '../styled';

// 3.- redux
import { RootState } from '../../../redux/reducers';
import { setActiveDark, IInitState } from '../../../redux/reducers/reducerTheme';

interface Props {
    handleClick: () => void;
}

const Toggle = ({ handleClick }: Props): JSX.Element => {

    const dispatch = useDispatch();

    const { isDark } = useSelector<RootState, IInitState>(state => state.theme);

    useEffect(() => {

        const getLS = window.localStorage.getItem('theme') ?? 'false';
        const isDark = JSON.parse(getLS);

        dispatch(setActiveDark(isDark));

    }, []);

    return (
        <ContainerToggle>
            <input type="checkbox" id="toggle" className="toggle--checkbox" defaultChecked={isDark} />
    
            <label htmlFor="toggle" className="toggle--label" onClick={handleClick}>
                <span className="toggle--label-background"></span>
            </label>
        </ContainerToggle>
    );
};

export default Toggle;