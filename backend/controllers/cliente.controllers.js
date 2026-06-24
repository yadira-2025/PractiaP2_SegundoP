import { TablaClientes } from "../models/cliente.models.js";

TablaClientes.create({
    idCliente: "CL001",
    nombre: "Arthit Nattapong",
    edad: "25",
    telefono: "089 332 7781",
    correo: "arthit@mail.com",
    direccion: "Sukhumvit Soi 11"

});

export const test = () => console.log("Si llama el controlador correctamenta")