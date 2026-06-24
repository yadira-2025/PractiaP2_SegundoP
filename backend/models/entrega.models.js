import {Schema, model} from "mongoose";

const EsquemaEntrega = new Schema({
    idDireccionEntrega: String,
    idCliente: String,
    calle: String,
    colonia: String,
    ciudad: String,
    pais: String
})

export const TablaEntrega = model("entregas", EsquemaEntrega);