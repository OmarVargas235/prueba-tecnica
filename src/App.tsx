// 1.- librerias
import { Suspense, lazy, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// 2.- redux
import { setActiveDark, IInitState } from './redux/reducers/reducerTheme';
import { RootState } from './redux/store';

// 3.- theme
import { themeLight, themeDark } from './theme/theme';

// 4.- components
import Spinner from "./layauts/spinner/Spinner";
const ListProducts = lazy(async () => await import("./main/listProducts"));
const FormProducts = lazy(async () => await import("./main/formProducts"));
const Alert = lazy(async () => await import("./layauts/alert/Alert"));

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: ${props => props.theme.primary};
	}
`;

function App(): JSX.Element {

    const dispatch = useDispatch();
    const { isDark } = useSelector<RootState, IInitState>(state => state.theme);

    useEffect(() => {

        const getLS = window.localStorage.getItem('theme') ?? 'false';
        const isDark = JSON.parse(getLS);

        dispatch(setActiveDark(isDark));

    }, []);

    return <Suspense fallback={<Spinner isLoading={true} />}>
        <ThemeProvider theme={isDark ? themeDark : themeLight}>

            <GlobalStyle />

            <Spinner />
            <Alert />

            <ListProducts />
            <FormProducts />
        </ThemeProvider>
    </Suspense>;
}

export default App;