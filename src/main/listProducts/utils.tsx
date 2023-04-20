import { BiEditAlt } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { ContainerIconAction } from "./styled";
import { DataBody } from "../../layauts/table/Table";
import { DataTable } from "../../helpers/interface";

export const thead = ['Codigo', 'Nombre', 'Descripción', 'Cantidad', 'Creacion', 'Acciones'];

// export const tbody = (dataUsers: DataTable[], setIsOpen: (v: boolean) => void, dispatch: Dispatch, deleteUser: (v: number, isDelete?: boolean) => Promise<void>): DataBody => {
export const tbody = (data: DataTable[], edit: (v: DataTable) => void): DataBody => {

    return data.map((v, index): any => (
        [
            v.code, v.name, v.description, v.stock, v.date,
            <div key={2} className='d-flex justify-content-center'>
                <ContainerIconAction
                    className='mr-3 pointer'
                    color='#DFECFF'
                    onClick={() => edit(v)}
                >
                    <BiEditAlt size={20} />
                </ContainerIconAction>

                <ContainerIconAction
                    className='pointer'
                    color='#FFDFDF'
                    // onClick={() => {

                    //     if (v.idestado === DESACTIVATED) return;
                    //     void deleteUser(v.idusuario);
                    // }}
                >
                    <IoCloseOutline size={20} />
                </ContainerIconAction>
            </div>
        ]
    ));
}