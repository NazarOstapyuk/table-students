export interface ISchoolboy {
    Quantity: number;
    Items: ISchoolboyItem[];
}
export interface ISchoolboyItem {
    Id: number;
    FirstName: string;
    SecondName: string;
    LastName: string;
}
export interface IColumn {
    Quantity: number;
    Items: IColumnItem[];
}
export interface IColumnItem {
    Id: number;
    Title: string;
}
export interface IRateItem {
    Id: number;
    Title: string;
    SchoolboyId: number;
    ColumnId: number;
}
export interface IRate {
    Quantity: number;
    Items: IRateItem[];
}
