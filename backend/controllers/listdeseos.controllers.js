import { TablaListDeseos } from "../models/listdeseos.models.js";

TablaListDeseos.create({
    idDeseo: "DS001",
    idCliente: "CL001",
    idProducto: "PD001",
    fechaAgregado: "2027-04-15"

});

export const test = () => console.log("Si llama el controlador correctamenta")