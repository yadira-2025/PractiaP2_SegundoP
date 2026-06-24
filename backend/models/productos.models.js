import { Schema, model } from "mongoose";

const EsquemaProductos = new Schema({
    idProducto: String,
    nombre: String,
    precio: Number,
    categoria: String
})

export const TablaProductos = new model("Tabla de Productos", EsquemaProductos)