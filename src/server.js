"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.get(["/", "/api"], function (req, res) { return res.redirect("api/whoami"); });
app.get("/api/whoami", function (req, res) {
    var response = {
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
    };
    res.json(response);
});
var port = process.env.PORT;
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
