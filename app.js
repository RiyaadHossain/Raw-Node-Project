const http = require("http")
const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<p>Welcome to Full Stack Development </p>")
    }
})

server.listen(PORT)
console.log(`Server is Running on PORT: ${PORT}`);