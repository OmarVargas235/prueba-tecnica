
// 2.- components
import Button from "../../../layauts/button/Button";
import Form from "../../../layauts/form/Form";
import { Text } from "../../../layauts/Text";
import TextField from "../../../layauts/textField/TextField";

// 3.- interfaces
import { HandleChange, HandleSubmit } from "../../../hooks/hookForm/interface";
import { DataTable as Model } from '../../../helpers/interface';
import { RequeridFields } from "../interfaces";

interface Props {
    handleChange: HandleChange<Model>;
    onSubmit: (v: object) => Promise<void>;
    handleSubmit: HandleSubmit<Model>;
    form: Model;
    setForm: (value: Model) => void;
    errors: RequeridFields[];
    isEdit: boolean;
}

const FormCreateEditPage = ({ handleChange, onSubmit, handleSubmit, form, setForm, errors, isEdit }: Props): JSX.Element => {

    return <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
    >
        <Text
            color='#006299'
            size='25px'
            weight='bold'
            className='mb-4 ml-3'
        >{!isEdit ? 'Nuevo' : 'Editar'} Producto</Text>
        
        <div className='row d-flex align-items-center'>
            <TextField
                handleChange={e => handleChange(e, setForm, form)}
                name='code'
                value={form.code}
                classes='col-sm-6'
                classesContainerInput='input-radius'
                label='Codigo'
                isError={errors.includes('code')}
                helperText={errors.includes('code') ? "Codigo requerido" : ""}
                colorHelperText="#D22F2F"
                isReadOnly={isEdit}
            />

            <TextField
                handleChange={e => handleChange(e, setForm, form)}
                name='name'
                value={form.name}
                classes='col-sm-6 mt-4 mt-sm-0'
                classesContainerInput='input-radius'
                label='Nombre'
                isError={errors.includes('name')}
                helperText={errors.includes('name') ? "Nombre requerido" : ""}
                colorHelperText="#D22F2F"
            />

            <TextField
                handleChange={e => handleChange(e, setForm, form)}
                name='description'
                value={form.description ?? ''}
                classes={`col-sm-6 mt-${errors.includes('stock') ? 0 : 4}`}
                classesContainerInput='input-radius'
                label='Descripción'
            />

            <TextField
                type='number'
                handleChange={e => handleChange(e, setForm, form)}
                name='stock'
                value={form.stock}
                classes='col-sm-6 mt-4'
                classesContainerInput='input-radius w-100'
                label='Cantidad'
                isError={errors.includes('stock')}
                helperText={errors.includes('stock') ? "Cantidad requerido" : ""}
                colorHelperText="#D22F2F"
            />

            <TextField
                type="date"
                handleChange={e => handleChange(e, setForm, form)}
                name='date'
                value={form.date}
                classes='col-12 mt-4'
                classesContainerInput='input-radius w-100'
                label='Fecha'
                isError={errors.includes('date')}
                helperText={errors.includes('date') ? "Fecha requerido" : ""}
                colorHelperText="#D22F2F"
                isReadOnly={true}
            />
        </div>

        <Button
            fullWidth={true}
            classes='mt-4'
            type='submit'
        >Guardar</Button>
    </Form>
}

export default FormCreateEditPage;