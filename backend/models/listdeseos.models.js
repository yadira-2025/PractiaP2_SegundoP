import {Schema, model} from "mongoose";

const EsquemaListDeseos = new Schema({
    idDeseo: String,
    idCliente: String,
    idProducto: String,
    fechaAgregado: Date
})

export const TablaListDeseos = model("deseos", EsquemaListDeseos);