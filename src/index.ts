import bookStore from './models/bookStore';
import { book } from './models/book';

const library = new bookStore ();
const book1 = new book ('Dracula', 'Abraham Stoker', 'Terror', 'Ingles', 70000, 'En la obra de Bram Stoker, la figura del vampiro, inspirada en una creencia popular, encontró su forma perfecta. El autor incorpora elementos de antiguas leyendas y tradiciones orales en una novela gótica fascinante. Con gran habilidad, coloca al vampiro de tiempos aparentemente pasados en la época moderna.', '26 de mayo de 1897', 'México, DF: Editorial Porrúa.', 576, '17 x 1.3 x 24 cm', true, 6);


library.addBook(book1);
library.listBooks();