
// 2.- componentes
import Table from "../../../layauts/table/Table";

// 3.- estilos
import { Container } from "../styled";

// 4.- utils
import { thead, tbody } from "../utils";

interface Props {
    handleClick: () => void;
    edit: () => void;
}

const ListProductsPage = ({ handleClick, edit }: Props): JSX.Element => {

    return <Container>
        <Table
            thead={thead}
            tbody={tbody([{ code: 123, date: '19/23/2024', description: 'description', name: "omar", stock: 21 }], edit)}
            width='180px'
            refresh={()=>console.log('hola mundo')}
            add={handleClick}
        />
    </Container>;
}

export default ListProductsPage;