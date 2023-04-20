// 1.- librerias
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 2.- componentes
import ListProductsPage from "../components/ListProductsPage";

// 3.- redux
import { RootState } from '../../../redux/reducers';
import { setIsActiveModalProduct, setIsEditProduct, setEditProduct } from '../../../redux/reducers/reducerUtils';
import { setDeleteProduct, IInitState as Product } from '../../../redux/reducers/reducerProduct';
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 4.- interfaces
import { DataTable } from '../../../helpers/interface';

// 5.- utils
import { alert } from '../../../helpers/utils';

const ListProducts = (): JSX.Element => {

    const dispatch = useDispatch();

    const [isDelte, setIsDelete] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');

    const { products } = useSelector<RootState, Product>(state => state.products);

    const handleClick = (): unknown => dispatch(setIsActiveModalProduct(true));

    const edit = (v: DataTable): void => {

        dispatch(setIsEditProduct(true));
        dispatch(setIsActiveModalProduct(true));
        dispatch(setEditProduct(v));
    }

    const deleteProduct = (code: string, isCloseModal: boolean): void => {
        
        setCode(code);
        if (isCloseModal) return setIsDelete(true);

        dispatch(setIsActiveLoading(true));

        window.setTimeout(() => {

            dispatch(setDeleteProduct(code));
            dispatch(setIsActiveLoading(false));
            setIsDelete(false);

            alert({ dispatch, isAlertSuccess: true, message: 'Producto eliminado con exito', isAlertWarning: false });

        }, 1000);
    }

    return <ListProductsPage
        handleClick={handleClick}
        edit={edit}
        products={products}
        deleteProduct={deleteProduct}
        isDelte={isDelte}
        code={code}
        setIsDelete={setIsDelete}
    />;
}

export default ListProducts;