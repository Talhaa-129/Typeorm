"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const createRoute_1 = require("./routes/createRoute");
const Client_1 = require("./entities/Client");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", createRoute_1.ClientRouter);
const Appdatasource = new typeorm_1.DataSource({
    type: "postgres",
    host: "54.158.89.83",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "dbtypeorm",
    entities: [Client_1.Client],
    synchronize: true,
    // logging: true,
});
Appdatasource.initialize()
    .then(() => {
    console.log("DataBase Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Successfully Login in ${PORT}..........`);
    });
})
    .catch((err) => console.log("Error Connecting database", err));
