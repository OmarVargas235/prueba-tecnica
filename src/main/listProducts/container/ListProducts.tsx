// 1.- librerias
import { useDispatch } from 'react-redux';

// 2.- componentes
import ListProductsPage from "../components/ListProductsPage";

// 3.- redux
import { setIsActiveModalProduct, setIsEditProduct } from '../../../redux/reducers/reducerUtils';

const ListProducts = (): JSX.Element => {

    const dispatch = useDispatch();

    const handleClick = (): unknown => dispatch(setIsActiveModalProduct(true));

    const edit = (): void => {

        dispatch(setIsEditProduct(true));
        dispatch(setIsActiveModalProduct(true));
    }

    return <ListProductsPage
        handleClick={handleClick}
        edit={edit}
    />;
}

export default ListProducts;