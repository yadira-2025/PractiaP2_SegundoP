import { TablaProductos } from "../models/productos.models.js";

TablaProductos.create({
    idProducto: "PD001",
    nombre: "Protector Solar",
    precio: "358",
    categoria: "Cuidado de la piel"

});

export const test = () => console.log("Si llama el controlador correctamenta")