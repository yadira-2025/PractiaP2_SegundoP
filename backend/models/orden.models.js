import {Schema, model} from "mongoose";

const EsquemaOrden = new Schema({
    idDetalle: String,
    idOrden: String,
    idProducto: String,
    cantidad: Number,
    precioUnitario: Number,
    subtotal: Number
})

export const TablaOrden = model("ordenes", EsquemaOrden);