export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface User {
  name: string;
  lastName: string;
  phone: string;
  address: Address;
}
