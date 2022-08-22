"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = require("../entities/Client");
const router = express_1.default.Router();
exports.ClientRouter = router;
router.post("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname } = req.body;
        const client = Client_1.Client.create({
            firstname: firstname,
            lastname: lastname,
        });
        yield client.save();
        return res.json(client);
    }
    catch (err) {
        console.log(err, "Errorr");
    }
}));
router.get("/alldata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await Client.delete({ id: 1 });
        // const allrecord = await Client.findOneBy({ id: 1 });
        const allrecord = yield Client_1.Client.find();
        return res.json(allrecord);
    }
    catch (err) {
        console.log(err, "Errorr");
    }
}));
router.delete("/datadelete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Client_1.Client.delete({ id: 1 });
        return res.status(200).send({ message: "Deleted" });
    }
    catch (err) {
        console.log(err, "Errorr");
    }
}));
router.patch("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Client_1.Client.update(1, { firstname: "talhamughal" });
        return res.status(200).send({ message: "Updated" });
    }
    catch (err) {
        console.log(err, "Errorr");
    }
}));
