import { Schema, model } from "mongoose";

const EsquemaClientes = new Schema({
    idCliente: String,
    nombre: String,
    edad: Number,
    telefono: String,
    correo: String,
    direccion: String
})

export const TablaClientes = new model("Tabla de Clientes", EsquemaClientes)