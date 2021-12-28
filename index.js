const express = require('express')
const app = express()

const http = require('http')
const https = require('https')

serverHttp = http.createServer(app)

// constant
const _portHttp = 3030

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// http
serverHttp.listen(_portHttp, () => {
    console.log(`http on http://localhost:${_portHttp}`)
})
