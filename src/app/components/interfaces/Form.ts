
export interface DataFake {
    id:   string;
    name: string;
}


export interface Departments {
    id:   string;
    name: string;
    cities: DataFake[]
}
