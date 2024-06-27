import { order } from './order';
import { book } from './book';

class order_management {
    orders: order[];

    constructor() {
        this.orders = [];
    }

    addPurchase(order: order): void {
        this.orders.push(order);
        console.log(`Orden numero: '${order.numeroPedido}' creada.`);
    }

    agregarLibro(libro: book, index: number): void {
        this.orders[index].listaLibros.push(libro);
        console.log(`Se agrego el libro '${libro.titulo}' a la orden.`);
    }

    eliminarLibro(titulo: string, index: number): void {
        const order = this.orders[index];
        order.listaLibros = order.listaLibros.filter(libro => libro.titulo !== titulo);
        console.log(`Se elimino el libro '${titulo}' de la orden.`);
    }

    calcularTotal(index: number): void {
        const order = this.orders[index];
        order.total = order.listaLibros.reduce((acc, libro) => acc + libro.precio, 0);
        console.log(`El total de la orden es: ${order.total}`);
    }
}

export default order_management;