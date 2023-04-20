// 1.- librerias
import { useSelector, useDispatch } from 'react-redux';

// 2.- componentes
import ListProductsPage from "../components/ListProductsPage";

// 3.- redux
import { RootState } from '../../../redux/reducers';
import { setIsActiveModalProduct, setIsEditProduct, setEditProduct } from '../../../redux/reducers/reducerUtils';
import { IInitState as Product } from '../../../redux/reducers/reducerProduct';

// 4.- interfaces
import { DataTable } from '../../../helpers/interface';

const ListProducts = (): JSX.Element => {

    const dispatch = useDispatch();

    const { products } = useSelector<RootState, Product>(state => state.products);

    const handleClick = (): unknown => dispatch(setIsActiveModalProduct(true));

    const edit = (v: DataTable): void => {

        dispatch(setIsEditProduct(true));
        dispatch(setIsActiveModalProduct(true));
        dispatch(setEditProduct(v));
    }

    return <ListProductsPage
        handleClick={handleClick}
        edit={edit}
        products={products}
    />;
}

export default ListProducts;