const http = require("http")
const fs = require("fs")
const PORT = 5000

const server = http.createServer( (req, res) => {
    
    if (req.url === "/") {
        res.write("<p>Welcome to Full Stack Development </p>")
        res.end()
    }

    if (req.url === "/read") {
        fs.readFile("./first.txt", (err, data) => {
            if (err) {
                res.write("Opps! Internal Server Error")
                res.end()
            } else {           
                res.write(`<p>${data}</p>`)
                res.end()
            }
        })
    }

    if (req.url === "/write") {
        fs.readFile("first.txt", (err, data) => {
            if (err) {
                res.write("Opps! Internal Server Error")
                res.end()
            } else {
                res.write(`<p>${ data }</p>`)
                res.end()
            }
        })

        fs.writeFile("second.txt", " I am a pull stack developer !!! 🤣", err => {
            if (err) {
                res.write("Opps! Internal Server Error")
            } else {
                res.write("Text written successfully")
            }
            res.end()
        })
    }

    if (req.url === "/append") {
       
    }

    if (req.url === "/delete") {
      
    }

})

server.listen(PORT)
console.log(`Server is Running on PORT: ${PORT}`);