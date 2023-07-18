import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routed/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const portNumber = 9000;
const userName = process.env.DB_USER;
const password = process.env.DB_PASS;

Connection(userName, password);
app.listen(portNumber, () => console.log(`Running on PORT ${portNumber}`));

DefaultData();
