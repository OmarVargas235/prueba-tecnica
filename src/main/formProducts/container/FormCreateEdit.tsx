// 1.- librerias
import { useState } from 'react';
import { useSelector } from 'react-redux';

// 2.- componentes
import FormCreateEditPage from '../components/FormCreateEditPage';
import { RequeridFields, requeridFields } from '../interfaces';

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// 4.- interfaces
import { DataTable as Model } from '../../../helpers/interface';
import { RootState } from '../../../redux/reducers';
import { IInitState } from '../../../redux/reducers/reducerUtils';

const FormCreateEdit = (): JSX.Element => {

    const { isEditProduct } = useSelector<RootState, IInitState>(state => state.utilsRedux);

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        code: -1,
        date: '',
        description: '',
        name: '',
        stock: -1
    });

    const onSubmit = async (model: object): Promise<void> => {

        const newModel = model as Model;
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return undefined;
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