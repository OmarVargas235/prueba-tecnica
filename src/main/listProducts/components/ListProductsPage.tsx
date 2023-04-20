
// 2.- componentes
import Table from "../../../layauts/table/Table";
import Modal from "../../../layauts/modal/Modal";
import CotainerIcon from "../../../layauts/cotainerIcon/CotainerIcon";
import Button from "../../../layauts/button/Button";
import { Text } from "../../../layauts/Text";
import Toggle from "./TogglePage";

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
    toggle: () => void;
}

const ListProductsPage = ({ handleClick, edit, products, deleteProduct, isDelte, code, setIsDelete, toggle }: Props): JSX.Element => {

    return <div className="d-flex justify-content-center">
        <Container>
            <Toggle
                handleClick={toggle}
            />

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
                
                <Text className="text-center mb-3">Estas seguro de eliminar este producto?</Text>

                <div className='d-flex justify-content-center'>
                    <Button
                        classes='mr-2'
                        color='#1e7e34'
                        handleClick={() => {void deleteProduct(code, false)}}
                    >Aceptar</Button>
                    
                    <Button color='#dc3545' dataClose='close'>Rechazar</Button>
                </div>
            </Modal>
        </Container>
    </div>;
}

export default ListProductsPage;