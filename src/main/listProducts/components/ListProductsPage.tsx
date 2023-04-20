
// 2.- componentes
import Table from "../../../layauts/table/Table";
import Modal from "../../../layauts/modal/Modal";
import CotainerIcon from "../../../layauts/cotainerIcon/CotainerIcon";
import Button from "../../../layauts/button/Button";

// 3.- estilos
import { Container } from "../styled";

// 4.- utils
import { thead, tbody } from "../utils";

// 5.- interfaces
import { DataTable } from "../../../helpers/interface";

// 6.- iconos
import { MdDelete } from "react-icons/md";

interface Props {
    handleClick: () => void;
    edit: (v: DataTable) => void;
    products: DataTable[];
    deleteProduct: (v: string, isModal: boolean) => void;
    isDelte: boolean;
    code: string;
    setIsDelete: (v: boolean) => void;
}

const ListProductsPage = ({ handleClick, edit, products, deleteProduct, isDelte, code, setIsDelete }: Props): JSX.Element => {

    return <Container>
        <Table
            thead={thead}
            tbody={tbody(products, edit, deleteProduct)}
            width='180px'
            refresh={()=> window.location.reload()}
            add={handleClick}
        />

        <Modal
            closeModal={(v) => setIsDelete(v)}
            open={isDelte}
            textBtn=''
            isButton={false}
            classess='modal-delete'
            width='300px'
        >
            <CotainerIcon
                icon={<MdDelete size={30} />}
                isCheck={false}
            />
            
            <p className="text-center">Estas seguro de eliminar este producto?</p>

            <div className='d-flex justify-content-center'>
                <Button
                    classes='mr-2'
                    color='#1e7e34'
                    handleClick={() => {void deleteProduct(code, false)}}
                >Aceptar</Button>
                
                <Button color='#dc3545' dataClose='close'>Rechazar</Button>
            </div>
        </Modal>
    </Container>;
}

export default ListProductsPage;