import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`
  <h1> OOPS! </h1>
  <p> We dont have the page you need</p>
  <a href="/">BAck home </a>`);
});

server.listen(5000);
//both parameters are object
// req== incoming request
//res = sending back

//http://localhost:5000/    it will show the msg of line 4
