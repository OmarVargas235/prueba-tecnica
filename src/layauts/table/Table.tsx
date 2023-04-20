// 1.- Librerias
import { useState, useEffect, ChangeEvent } from 'react';

// 2.- components
import TextField from '../textField/TextField';
import Button from '../button/Button';
import Select, { IOption } from '../select/Select';
import { Text } from '../Text';

// 3.- Estilos
import { Container, Thead, Th, TBody, Tr, Td, BoxNumberPaginate } from './styled';

// 4.- iconos
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

export type DataBody = Array<Array<string | number | JSX.Element>>;

interface Props {
    thead: string[];
    tbody: DataBody;
    width: string;
    alignHead?: 'left' | 'center' | 'right';
    alignBody?: 'left' | 'center' | 'right';
    refresh: () => void;
    add?: () => void;
}

enum ValuesDefault {
    init = 1,
    end = 5
}

const Table = ({ thead, tbody, width, alignHead='center', alignBody='center', refresh, add=undefined }: Props): JSX.Element => {

    const [currentTotal, setCurrentTotal] = useState<number>(ValuesDefault.end);
    const [init, setInit] = useState<number>(ValuesDefault.init);
    const [end, setEnd] = useState<number>(ValuesDefault.end);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(ValuesDefault.init);
    const [dataBody, setDataBody] = useState<DataBody>([]);
    const [search, setSeacrh] = useState<string>('');

    useEffect(() => {

        const totalPage = Math.ceil(dataBody.length / currentTotal);
        setTotalPage(totalPage);

    }, [currentTotal, dataBody]);

    useEffect(() => setDataBody(tbody), [tbody]);

    const step = (n: number): void => {

        const nInit = currentTotal * n - currentTotal;
        const nEnd = currentTotal * n;

        setInit(nInit+1);
        setEnd(nEnd);
        setCurrentPage(n);
    }

    const prev = (): void => {

        const prev = currentPage-1;
        const nInit = init - 1 - currentTotal;
        const nEnd = end- currentTotal;
        
        setInit(nInit+1);
        setEnd(nEnd);
        setCurrentPage(prev);
    }

    const next = (): void => {

        const next = currentPage+1;
        const nInit = currentPage * currentTotal;
        const nEnd = next * currentTotal;

        setInit(nInit+1);
        setEnd(nEnd);
        setCurrentPage(next);
    }

    const handleSelect = (e: IOption): void => {

        setCurrentTotal(Number(e.value));
        setEnd(Number(e.value));
        
        setCurrentPage(ValuesDefault.init);
        setInit(ValuesDefault.init);
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {

        const text: string = e.target.value.toLowerCase().trim();

        const filter = tbody.filter(arr => {

            const sliceLastElement = arr.slice(0, -1);
            const copyArr: string[] = JSON.parse(JSON.stringify(sliceLastElement));

            return copyArr.filter(v => v == null
                ? false
                : v.toLowerCase().trim().includes(text)
            ).length > 0;
        });

        setSeacrh(text);
        setDataBody(filter);
        setInit(1);
        setCurrentPage(1);
        setEnd(currentTotal);
    }

    return <Container className='p-4'>
        <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4'>
            <TextField
                handleChange={handleSearch}
                name='search'
                value={search}
                icon={<AiOutlineSearch size={25} />}
                edge="start"
                classesContainerInput='border-radius'
                classes="search"
            />

            <div className='d-flex container-buttons'>
                {
                    add !== undefined
                    ? <Button
                        classes='mr-2 add'
                        handleClick={() => add()}
                    >Nuevo Producto</Button>
                    : null
                }

                <Button
                    handleClick={() => refresh()}
                    edge='end'
                    icon={<BiRefresh size={18} />}
                    classes='refresh'
                >Refrescar</Button>
            </div>
        </div>

        <div className='container-table d-flex flex-column align-items-center'>
            <Thead
                columns={thead.length}
                align={alignHead}
                widthGrid={width}
            >
                {
                    thead.map((v, index) => (
                        <Th
                            key={index}
                            className='p-2'
                            isFirst={index === 0}
                            isLast={index === thead.length -1}
                        >{v}</Th>
                    ))
                }
            </Thead>

            <TBody>
                {
                    dataBody.slice(init-1, end).map(((row, index) => (
                        <Tr
                            key={index}
                            className='p-2'
                            columns={row.length}
                            align={alignBody}
                            widthGrid={width}
                        >
                            {
                                row.map((v, index) => (
                                    <Td key={index}>{v}</Td>
                                ))
                            }
                        </Tr>
                    )))
                }
            </TBody>
        </div>

        <div className='d-flex align-items-start justify-content-between mt-4 paginate'>
            <Select
                options={[
                    { label: '5', value: 5 },
                    { label: '10', value: 10 },
                    { label: '20', value: 20 },
                    { label: '30', value: 30 },
                ]}
                handleChange={handleSelect}
                className='mr-1'
            />

            <Text
                size='14px'
            >Mostrando registros del {init} al {currentPage === totalPage ? dataBody.length : end} de un total de {dataBody.length} registros</Text>

            <div className='d-flex align-items-center'>
                <Button
                    classes='btn-table'
                    handleClick={prev}
                    disabled={currentPage === ValuesDefault.init || dataBody.length === 0}
                >Anterior</Button>
                
                <div className='d-flex mx-1'>
                    {
                        new Array(totalPage).fill(1).map((v, index) => (
                            <BoxNumberPaginate
                                key={index}
                                onClick={() => step(index+1)}
                                isCurrent={(index+1)*currentTotal === end}
                            >{index+1}</BoxNumberPaginate>
                        ))
                    }
                </div>

                <Button
                    classes='btn-table'
                    handleClick={next}
                    disabled={currentPage === totalPage || dataBody.length === 0}
                >Siguiente</Button>
            </div>
        </div>
    </Container>
}

export default Table;