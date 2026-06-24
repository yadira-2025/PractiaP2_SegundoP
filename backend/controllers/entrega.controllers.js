import { TablaEntrega } from "../models/entrega.models.js";

TablaEntrega.create({
    idDireccionEntrega: "DE001",
    idCliente: "CL001",
    calle: "Sukhumvit Soi 11",
    colonia: "Khlong Toei Nuea",
    ciudad: "Bangkok",
    pais: "Thailandia"

});

export const test = () => console.log("Si llama el controlador correctamenta")