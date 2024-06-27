export class customer {
    nombre: string;
    telefono: number;
    direccion: string;
    correo: string;

    constructor(
        nombre: string,
        telefono: number,
        direccion: string,
        correo: string,
    ) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
    }
}