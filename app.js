import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

import { test as testCliente } from "./backend/controllers/cliente.controllers.js";
import { test as testProducto } from "./backend/controllers/productos.controllers.js";

dotenv.config();

mongoose.connect(process.env.url_bd)
.then(() => console.log("Funciono la base de datos"))
.catch((error) => console.log("No funciona la base de datos"));

const app = express();

app.use(cors());

app.listen(4000, () => console.log("Funciona el servidor"));

testCliente();
testProducto();