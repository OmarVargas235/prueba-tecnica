export interface IDataTable {
    code: number;
    name: string;
    description: string;
    stock: number;
    date: string;
}

export type DataTable = Readonly<IDataTable>;