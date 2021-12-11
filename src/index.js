const { request, response } = require('express')
const express = require('express')
const { v4: uuid } = require("uuid")

const app = express()

app.use(express.json())

const api = []

function verifyRoutes() {

}

function orderArray() {
}


app.get("/", verifyRoutes, (request, response) => {

    const { customer } = request

    return response.json(customer.statement)
})

app.listen(3333)
