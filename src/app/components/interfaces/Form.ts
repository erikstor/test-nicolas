
export interface DataFake {
    id:   string;
    name: string;
}


export interface Departments {
    id:   string;
    name: string;
    cities: DataFake[]
}
export interface cotizacion {
    city:       string;
    department: string;
    email:      string;
    fullName:   string;
    model:      number;
    phone:      string;
    agree:      boolean;
}
