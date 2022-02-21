const http = require("http")
const fs = require("fs")
fs.writeFile("index.html", "<h1>Hello World</h1>", (err, data) => {
    if (!err) {
        const server = http.createServer((req, res) => {
            fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
                if (!err) {
                    res.end(data);
                }
            })
        })
        server.listen(3000, () => console.log('server started'))
    }
    else {
        console.log('failed')
    }
})