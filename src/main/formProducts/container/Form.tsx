// 1.- librerias
import { useDispatch, useSelector } from 'react-redux';

// 2.- componentes
import FormPage from "../components/FormPage";

// 3.- redux
import { RootState } from '../../../redux/reducers';
import { IInitState, setIsActiveModalProduct, setIsEditProduct } from '../../../redux/reducers/reducerUtils';

const FormProducts = (): JSX.Element => {

    const dispatch = useDispatch();

    const { isOpenModalProduct } = useSelector<RootState, IInitState>(state => state.utilsRedux);

    const closeModal = (v: boolean): void => {
        dispatch(setIsActiveModalProduct(v));
        dispatch(setIsEditProduct(v));
    }

    return <FormPage
        isOpen={isOpenModalProduct}
        closeModal={closeModal}
    />;
}

export default FormProducts;