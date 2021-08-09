const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Why are oyu even looking at this? Out_put_code: (2)")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive