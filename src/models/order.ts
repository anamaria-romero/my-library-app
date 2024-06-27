import { book } from "./book";
export class order {
    numeroPedido: number;
    fechaPedido: string;
    listaLibros: book[];
    total: number;

    constructor(
        numeroPedido: number,
        fechaPedido: string,
        listaLibros: book[] = [],
        total: number = 0,
    ) {
        this.numeroPedido = numeroPedido;
        this.fechaPedido = fechaPedido;
        this.listaLibros = listaLibros;
        this.total = total;
    }
}