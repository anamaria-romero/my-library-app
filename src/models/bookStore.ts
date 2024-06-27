import { book } from './book';

class bookStore {
    books: book[];

    constructor() {
        this.books = [];
    }

    //Metodo para agregar un libro a la biblioteca//
    addBook(book: book): void {
        this.books.push(book);
        console.log(`Libro '${book.titulo}' agregado a la biblioteca.`)
    }

    //Metodo para eliminar un libro de la biblioteca//
    removeBook(titulo: string): void {
        const index = this.books.findIndex(book => book.titulo === titulo);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Libro '${titulo}' eliminado de la biblioteca.`);
        } else {
            console.log(`Libro '${titulo}' no ha sido encontrado en la biblioteca.`);
        }
    }

    //Metodo para mostrar todos los libros de la biblioteca//
    listBooks(): void {
        if (this.books.length === 0) {
            console.log('La biblioteca esta vacia.');
        } else {
            console.log('Libros en la biblioteca:');
            this.books.forEach(book => {
                console.log(`-Titulo: ${book.titulo}, Autor: ${book.autor}, Genero: ${book.genero}, Idioma: ${book.idioma}, Precio: ${book.precio}, Descripcion: ${book.descripcion}, Fecha publicacion: ${book.fecha_publicacion},  Editorial: ${book.editorial}, Paginas: ${book.paginas}, Dimensiones: ${book.dimensiones}, Disponible: ${book.disponible} Stock: ${book.cantidad_stock}`);
            });
        }
    }
    //Metodo para actualizar la cantidad del stock//
    updateBookStock(index: number, nueva_cantidad: number): void {
        this.books[index].cantidad_stock = nueva_cantidad;
        console.log(`A el libro: ${this.books[index].titulo} se le actualizo la cantidad en el stock, a: ${this.books[index].cantidad_stock}`)
    }

}

export default bookStore