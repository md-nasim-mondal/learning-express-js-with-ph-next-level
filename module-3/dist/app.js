"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log({ req, res });
    res.send("Hello World!!");
});
app.get("/todos", (req, res) => {
    res.send("Hello World!");
});
app.get("/todos/create-todo", (req, res) => {
    res.send("Hello World!");
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
/**
 * Basic File structure
 *  server fille - server handling like - starting, closing error handling of server, only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works.
 */
