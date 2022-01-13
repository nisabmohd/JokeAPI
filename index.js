const http = require("http")
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/dank") {
        fs.readFile(`${__dirname}/json/dank.json`, 'utf-8', (err, data) => {
            const a = (JSON.parse(data));
            const len = a.length;
            const t = Math.floor(Math.random() * len)
            res.end(JSON.stringify(a[t]))
        })
    }
    else if (req.url === "/dumb") {
        fs.readFile(`${__dirname}/json/dumb.json`, 'utf-8', (err, data) => {
            const a = (JSON.parse(data));
            const len = a.length;
            const t = Math.floor(Math.random() * len)
            res.end(JSON.stringify(a[t]))
        })
    }
    else if (req.url === "/dry") {
        fs.readFile(`${__dirname}/json/dry.json`, 'utf-8', (err, data) => {
            const a = (JSON.parse(data));
            const len = a.length;
            const t = Math.floor(Math.random() * len)
            res.end(JSON.stringify(a[t]))
        })
    }
    else if (req.url === "/clean") {
        fs.readFile(`${__dirname}/json/clean.json`, 'utf-8', (err, data) => {
            const a = (JSON.parse(data));
            const len = a.length;
            const t = Math.floor(Math.random() * len)
            res.end(JSON.stringify(a[t]))
        })
    }
    else {
       fs.readFile(`${__dirname}/json/err.json`,"utf-8",(err,data)=>{
            res.end(data)
       })
    }
})

server.listen(process.env.PORT || 8000)