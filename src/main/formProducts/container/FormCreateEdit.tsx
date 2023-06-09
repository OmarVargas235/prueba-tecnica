// 1.- librerias
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 2.- componentes
import FormCreateEditPage from '../components/FormCreateEditPage';
import { RequeridFields, requeridFields } from '../interfaces';

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// 4.- interfaces
import { DataTable as Model } from '../../../helpers/interface';

// 5.- redux
import { RootState } from '../../../redux/reducers';
import { IInitState as IInitStateUtils } from '../../../redux/reducers/reducerUtils';
import { saveProduct, setEditProduct, IInitState as Product } from '../../../redux/reducers/reducerProduct';
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 6.- utils
import { alert, setDate } from '../../../helpers/utils';

interface Props {
    closeModal: (v: boolean) => void;
}

const FormCreateEdit = ({ closeModal }: Props): JSX.Element => {

    const dispatch = useDispatch();

    const { isEditProduct, dataProduct } = useSelector<RootState, IInitStateUtils>(state => state.utilsRedux);
    const { products } = useSelector<RootState, Product>(state => state.products);

    const { handleSubmit, handleChange, validateFields, errors, setValuesDefault } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        code: "",
        date: setDate(new Date()),
        description: '',
        name: '',
        stock: 0
    });

    useEffect(() => setValuesDefault('date', setDate(new Date())), []);

    useEffect(() => {

        if (!isEditProduct) return;
        
        setForm({
            code: dataProduct.code,
            date: setDate(new Date()),
            description: dataProduct.description,
            name: dataProduct.name,
            stock: dataProduct.stock
        });

        setValuesDefault('code', dataProduct.code);
        setValuesDefault('description', dataProduct.description ?? '');
        setValuesDefault('name', dataProduct.name);
        setValuesDefault('date', setDate(new Date()));
        setValuesDefault('stock', dataProduct.stock);

    }, [dataProduct, isEditProduct]);

    useEffect(() => {

        form.stock < 0 && setForm(state => ({ ...state, stock: Math.abs(form.stock) }));

    }, [form.stock]);

    useEffect(() => {

        if (form.code.length === 0) return;

        const isCodeNumber = isNaN(Number(form.code));

        isCodeNumber && setForm(state => ({ ...state, code: form.code.slice(0, -1) }));

    }, [form.code]);

    const onSubmit = async (model: object): Promise<void> => {

        const newModel = model as Model;
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return undefined;

        const isCode = products.some(v => v.code === form.code);
        
        if (isCode && !isEditProduct)
            return alert({ dispatch, isAlertSuccess: false, message: 'Ya existe un producto con el mismo codigo', isAlertWarning: true });

        if (form.code.length < 4)
            return alert({ dispatch, isAlertSuccess: false, message: 'El codigo debe de tener un mínimo de 4 digitos', isAlertWarning: true });

        dispatch(setIsActiveLoading(true));

        window.setTimeout(() => {

            isEditProduct ? dispatch(setEditProduct(newModel)) : dispatch(saveProduct(newModel));
            dispatch(setIsActiveLoading(false));
            closeModal(false);

            const message = isEditProduct ? 'Producto editado con exito' : 'Producto creado con exito';

            alert({ dispatch, isAlertSuccess: true, message, isAlertWarning: false });

        }, 1000);
    }

    return <FormCreateEditPage
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
        errors={errors}
        isEdit={isEditProduct}
    />
}

export default FormCreateEdit;