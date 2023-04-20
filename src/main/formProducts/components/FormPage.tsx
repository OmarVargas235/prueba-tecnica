
// 2.- components
import Modal from "../../../layauts/modal/Modal";
import FormCreateEdit from "../container/FormCreateEdit";

// 3.- estilos
import { Container } from "../styled";

interface Props {
    isOpen: boolean;
    closeModal: (v: boolean) => void;
}

const FormPage = ({ isOpen, closeModal }: Props): JSX.Element => {

    return <Container>
        <Modal
            closeModal={(v) => closeModal(v)}
            open={isOpen}
            textBtn=''
            isButton={false}
            width="700px"
        >
            <FormCreateEdit
                closeModal={closeModal}
            />
        </Modal>
    </Container>;
}

export default FormPage;