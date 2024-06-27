export class book {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    descripcion: string;
    fecha_publicacion: string;
    editorial: string;
    paginas: number;
    dimensiones: string;
    disponible: boolean;
    cantidad_stock: number;

    constructor(
        titulo: string,
        autor: string,
        genero: string,
        idioma: string,
        precio: number,
        descripcion: string,
        fecha_publicacion: string,
        editorial: string,
        paginas: number,
        dimensiones: string,
        disponible: boolean,
        cantidad_stock: number
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.descripcion = descripcion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.disponible = disponible;
        this.cantidad_stock = cantidad_stock;
    }
}