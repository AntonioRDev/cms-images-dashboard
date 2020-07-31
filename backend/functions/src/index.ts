import * as functions from 'firebase-functions';
import express = require("express");
import cors = require("cors");
import routes from "./routes";
import morgan from "morgan";
const fileParser = require('express-multipart-file-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(fileParser);
app.use(cors());
app.use(morgan("dev"));

app.use(routes);

export const API = functions.https.onRequest(app);
