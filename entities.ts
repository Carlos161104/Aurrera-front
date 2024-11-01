export interface Location {
    locationID: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    manager: Manager;
    region?: any;
    employees: Employee[];
}
export interface Employee {
    employeeId: string;
    employeeName: string
    employeeLastName: string
    phoneNumber: string
    employeeEmail: string
    employeePhoto: string
    location: Location
    user?: any;
}

export interface Manager {
    managerID: string;
    managerFullName: string;
    salary: number;
    managerEmail: string;
    managerPhone: string;
    location: Location;
    user?: any;
}

export interface Provider {
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products: Product[]
  }
  
  export interface Product {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider
  }