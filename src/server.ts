require("dotenv").config()
import { Request, Response } from "express"
const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())

app.get(["/", "/api"], (req: Request, res: Response) => res.redirect("api/whoami"))

app.get("/api/whoami", (req: Request, res: Response) => {
    const response = {
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
    }

    res.json(response)
})

const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`))