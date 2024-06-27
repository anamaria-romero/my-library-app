import { customer } from './customer';

class customer_management {
  customers: customer[];

  constructor() {
    this.customers = [];
  }

  registerCustomer(customer: customer): void {
    this.customers.push(customer);
    console.log(`Cliente '${customer.nombre}' agregado a la tienda.`);
  }

  updatePhone(index: number, nuevo_telefono: number): void {
    this.customers[index].telefono = nuevo_telefono;
    console.log(`A el cliente: ${this.customers[index].nombre} se le actualizo el telefono, a: ${this.customers[index].telefono}`);
  }

  updateAddress(index: number, nueva_direccion: string): void {
    this.customers[index].direccion = nueva_direccion;
    console.log(`A el cliente: ${this.customers[index].nombre} se le actualizo la direccion, a: ${this.customers[index].direccion}`);
  }

  updateEmail(index: number, nuevo_Email: string): void {
    this.customers[index].correo = nuevo_Email;
    console.log(`A el cliente: ${this.customers[index].nombre} se le actualizo el correo, a: ${this.customers[index].correo}`);
  }
}

export default customer_management;