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
exports.getProducts = exports.createProduct = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const products_1 = __importDefault(require("../../models/products"));
mongoose_1.default
    .connect(process.env.MONGODB_URI ||
    "mongodb+srv://tg-lender:GZSCIeHCWGyrmyZE@cluster0.rwg4svv.mongodb.net/my-products")
    .then(() => {
    console.log("Connected to Database...!");
})
    .catch(() => {
    console.error("Connection failed...!");
});
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const createdProduct = new products_1.default({
        name: req.body.name,
        price: req.body.price,
    });
    const result = yield createdProduct.save();
    res.json(result);
});
exports.createProduct = createProduct;
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.default.find().exec();
    res.json(products);
});
exports.getProducts = getProducts;
