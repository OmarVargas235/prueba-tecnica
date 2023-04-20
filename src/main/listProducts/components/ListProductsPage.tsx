
// 2.- componentes
import Table from "../../../layauts/table/Table";

// 3.- estilos
import { Container } from "../styled";

// 4.- utils
import { thead, tbody } from "../utils";

// 5.- interfaces
import { DataTable } from "../../../helpers/interface";

interface Props {
    handleClick: () => void;
    edit: (v: DataTable) => void;
    products: DataTable[];
}

const ListProductsPage = ({ handleClick, edit, products }: Props): JSX.Element => {

    return <Container>
        <Table
            thead={thead}
            tbody={tbody(products, edit)}
            width='180px'
            refresh={()=>console.log('hola mundo')}
            add={handleClick}
        />
    </Container>;
}

export default ListProductsPage;