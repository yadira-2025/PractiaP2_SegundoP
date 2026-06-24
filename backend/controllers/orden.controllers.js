import { TablaOrden } from "../models/orden.models.js";

TablaOrden.create({
    idDetalle: "DET001",
    idOrden: "OD001",
    idProducto: "PD001",
    cantidad: "2",
    precioUnitario: "358",
    subtotal: "716"

});

export const test = () => console.log("Si llama el controlador correctamenta")