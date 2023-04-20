interface IDataTable {
    code: string;
    name: string;
    description?: string;
    stock: number;
    date: string;
}

export type DataTable = Readonly<IDataTable>;