// 1.- librerias
import { Suspense, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// 2.- redux
import { setActiveDark, IInitState } from './redux/reducers/reducerTheme';
import { RootState } from './redux/store';

// 4.- theme
import { themeLight, themeDark } from './theme/theme';

// 5.- components
import Spinner from "./layauts/spinner/Spinner";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background-size: cover;
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

        <GlobalStyle />

        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <div>Hola</div>
        </ThemeProvider>
    </Suspense>;
}

export default App;