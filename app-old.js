const http = require("http");

http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "application/json" })
        let output = {
            name: "Luis",
            age: 30,
            url: req.url
        };
        res.write(JSON.stringify(output));
        // res.write("Hello world");
        res.end();
    })
    .listen(8080);

console.log("Listening on port 8080");