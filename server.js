//import http and fs modules
let http = require("http");
let fs = require("fs");
let path = require("path");
let url = require("url");

// create server with http
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    let filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      //  fs.readFile("./index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      //  res.write(data);
      res.end(data);
    });
  }
  if (req.url === "/home.html") {
    let filePath = path.join(__dirname, "pages", "home.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      //  res.write(data);
      res.end(data);
    });
  }
  if (req.url === "/about.html") {
    let filePath = path.join(__dirname, "pages", "about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      //  res.write(data);
      res.end(data);
    });
  }
  if (req.url === "/contact.html") {
    let filePath = path.join(__dirname, "pages", "contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      //   res.write(data);
      res.end(data);
    });
  }
});

//create a port
server.listen(4000, "127.0.0.1");
console.log("yes,we did it");
