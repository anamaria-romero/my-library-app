import * as readline from 'readline';
import bookStore from './models/bookStore';
import customer_management from './models/customer_management';
import order_management from './models/order_management';
import { book } from './models/book';
import { customer } from './models/customer';
import { order } from './models/order';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const library = new bookStore();
const customerManager = new customer_management();
const orderManager = new order_management();

const initialBooks = [
    new book('Dracula', 'Abraham Stoker', 'Terror', 'Ingles', 70000, 'En la obra de Bram Stoker, la figura del vampiro, inspirada en una creencia popular, encontró su forma perfecta. El autor incorpora elementos de antiguas leyendas y tradiciones orales en una novela gótica fascinante. Con gran habilidad, coloca al vampiro de tiempos aparentemente pasados en la época moderna.', '26 de mayo de 1897', 'México, DF: Editorial Porrúa.', 576, '17 x 1.3 x 24 cm', true, 6),
    new book('1984', 'George Orwell', 'Distopía', 'Ingles', 120000, 'Una novela clásica que explora un futuro distópico donde el gobierno totalitario controla todos los aspectos de la vida de las personas.', '26 de mayo de 1949', 'México, DF: Editorial Porrúa.', 328, '10.8 x 1.5 x 17.1 cm', true, 3),
    new book('Cien años de soledad', 'Gabriel García Márquez', 'Realismo mágico', 'Español', 80000, 'La historia épica de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo.', '30 de mayo de 1967', 'México, DF: Editorial Porrúa.', 417, '13.2 x 2.8 x 20.3 cm', false, 0),
    new book('To Kill a Mockingbird', 'Harper Lee', 'Ficción clásica', 'Ingles', 150000, 'Una novela que aborda temas de injusticia racial y moralidad a través de los ojos de una niña en el sur de Estados Unidos durante la década de 1930.', '11 de julio de 1960', 'México, DF: Editorial Porrúa.', 336, '10.6 x 1.8 x 17.1 cm', true, 4),
    new book('Romeo y Julieta', 'William Shakespeare', 'Tragedia', 'Frances', 25990, 'La famosa historia de amor entre dos jóvenes de familias rivales en Verona', '11 de julio de 1600', 'México, DF: Editorial Porrúa.', 180, '13 x 20 cm', false, 0)
];

const initialCustomers = [
    new customer('Ana', 3104252985, 'carrera 6', 'anamrome16@gmail.com'),
    new customer('Juan', 310429123, 'calle 24', 'juan17@gmail.com'),
    new customer('Camilo', 3104252456, 'carrera 4', 'camilo18@gmail.com'),
    new customer('Ronald', 3104252789, 'calle 1', 'ronald19@gmail.com'),
    new customer('Luisa', 3104252498, 'Barrio El Prado', 'luisa20@gmail.com')
];

initialBooks.forEach(book => library.addBook(book));
initialCustomers.forEach(customer => customerManager.registerCustomer(customer));

function showMenu() {
    console.log(`
    1. Agregar libro
    2. Eliminar libro
    3. Listar libros
    4. Actualizar stock de un libro
    5. Registrar cliente
    6. Actualizar teléfono de cliente
    7. Actualizar dirección de cliente
    8. Actualizar email de cliente
    9. Crear orden
    10. Agregar libro a orden
    11. Eliminar libro de orden
    12. Calcular total de la orden
    13. Salir
    `);
    rl.question('Seleccione una opción: ', handleMenuSelection);
}

function handleMenuSelection(option: string) {
    switch (option) {
        case '1':
            addBook();
            break;
        case '2':
            removeBook();
            break;
        case '3':
            listBooks();
            break;
        case '4':
            updateBookStock();
            break;
        case '5':
            registerCustomer();
            break;
        case '6':
            updateCustomerPhone();
            break;
        case '7':
            updateCustomerAddress();
            break;
        case '8':
            updateCustomerEmail();
            break;
        case '9':
            createOrder();
            break;
        case '10':
            addBookToOrder();
            break;
        case '11':
            removeBookFromOrder();
            break;
        case '12':
            calculateOrderTotal();
            break;
        case '13':
            rl.close();
            break;
        default:
            console.log('Opción no válida');
            showMenu();
            break;
    }
}

function addBook() {
    rl.question('Título: ', (titulo) => {
        rl.question('Autor: ', (autor) => {
            rl.question('Género: ', (genero) => {
                rl.question('Idioma: ', (idioma) => {
                    rl.question('Precio: ', (precio) => {
                        rl.question('Descripción: ', (descripcion) => {
                            rl.question('Fecha de publicación: ', (fecha_publicacion) => {
                                rl.question('Editorial: ', (editorial) => {
                                    rl.question('Páginas: ', (paginas) => {
                                        rl.question('Dimensiones: ', (dimensiones) => {
                                            rl.question('Disponible (true/false): ', (disponible) => {
                                                rl.question('Cantidad en stock: ', (cantidad_stock) => {
                                                    const newBook = new book(titulo, autor, genero, idioma, parseFloat(precio), descripcion, fecha_publicacion, editorial, parseInt(paginas), dimensiones, disponible === 'true', parseInt(cantidad_stock));
                                                    library.addBook(newBook);
                                                    showMenu();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function removeBook() {
    rl.question('Título del libro a eliminar: ', (titulo) => {
        library.removeBook(titulo);
        showMenu();
    });
}

function listBooks() {
    library.listBooks();
    showMenu();
}

function updateBookStock() {
    rl.question('Índice del libro: ', (index) => {
        rl.question('Nueva cantidad en stock: ', (cantidad) => {
            library.updateBookStock(parseInt(index), parseInt(cantidad));
            showMenu();
        });
    });
}

function registerCustomer() {
    rl.question('Nombre: ', (nombre) => {
        rl.question('Teléfono: ', (telefono) => {
            rl.question('Dirección: ', (direccion) => {
                rl.question('Email: ', (correo) => {
                    const newCustomer = new customer(nombre, parseInt(telefono), direccion, correo);
                    customerManager.registerCustomer(newCustomer);
                    showMenu();
                });
            });
        });
    });
}

function updateCustomerPhone() {
    rl.question('Índice del cliente: ', (index) => {
        rl.question('Nuevo teléfono: ', (telefono) => {
            customerManager.updatePhone(parseInt(index), parseInt(telefono));
            showMenu();
        });
    });
}

function updateCustomerAddress() {
    rl.question('Índice del cliente: ', (index) => {
        rl.question('Nueva dirección: ', (direccion) => {
            customerManager.updateAddress(parseInt(index), direccion);
            showMenu();
        });
    });
}

function updateCustomerEmail() {
    rl.question('Índice del cliente: ', (index) => {
        rl.question('Nuevo email: ', (email) => {
            customerManager.updateEmail(parseInt(index), email);
            showMenu();
        });
    });
}

function createOrder() {
    rl.question('Número de pedido: ', (numeroPedido) => {
        rl.question('Fecha del pedido: ', (fechaPedido) => {
            const newOrder = new order(parseInt(numeroPedido), fechaPedido);
            orderManager.addPurchase(newOrder);
            showMenu();
        });
    });
}

function addBookToOrder() {
    rl.question('Índice de la orden: ', (index) => {
        rl.question('Título del libro: ', (titulo) => {
            const libro = library.books.find(book => book.titulo === titulo);
            if (libro) {
                orderManager.agregarLibro(libro, parseInt(index));
                console.log(`Se agregó el libro '${libro.titulo}' a la orden número ${index}.`);
            } else {
                console.log('Libro no encontrado');
            }
            showMenu();
        });
    });
}

function removeBookFromOrder() {
    rl.question('Índice de la orden: ', (index) => {
        rl.question('Título del libro: ', (titulo) => {
            orderManager.eliminarLibro(titulo, parseInt(index));
            console.log(`Se eliminó el libro '${titulo}' de la orden número ${index}.`);
            showMenu();
        });
    });
}

function calculateOrderTotal() {
    rl.question('Índice de la orden: ', (index) => {
        orderManager.calcularTotal(parseInt(index));
        console.log(`El total de la orden número ${index} es ${orderManager.orders[parseInt(index)].total}.`);
        showMenu();
    });
}

showMenu();