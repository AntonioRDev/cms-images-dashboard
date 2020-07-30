import * as functions from 'firebase-functions';
import express = require("express");
import cors = require("cors");

const app = express();

const users = [{
    id: 1,
    name: "Test"
}];

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.get("/", (req, res) => {
    res.json({ ok: "Hello World" });
});

app.get("/users", (req, res) => {
    res.json(users);
});

export const API = functions.https.onRequest(app);
