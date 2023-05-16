const express = require('express')
const {listen} = require("express/lib/application");

const PORT = process.env.port || 8080

const app = express()

app.get('/', (req, res) =>
    res.send("hello penis")
)

app.listen(PORT, () => console.log(`server started on ${PORT}`))