const http = require("http")
const fs = require("fs")
const PORT = 5000

const server = http.createServer((req, res) => {

    // Root Path
    if (req.url === "/") {
        res.write("<p>Welcome to Full Stack Development </p>")
        res.end()
    }

    // Path to Read Data
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

    // Path to Write Data
    if (req.url === "/write") {
        fs.readFile("first.txt", (err, data) => {
            if (err) {
                res.write("Opps! Internal Server Error")
                res.end()
            } else {
                res.write(`<p>${data}</p>`)
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

    // Path to Append Data
    if (req.url === "/append") {
        const data = fs.writeFileSync("./first.txt", "No! It will be full not pull ! 😑")
        if (data) res.write("Text appended successfully !")
        res.end()
    }

    // Path to Delete Data
    if (req.url === "/delete") {
        const data = fs.unlinkSync("./second.txt")
        if (data) {
            res.write("File Deleted successfully")
        } else {

            res.write("Opps! Internal Server Error")
        }
        res.end()
    }

})

server.listen(PORT)
console.log(`Server is Running on PORT: ${PORT}`);