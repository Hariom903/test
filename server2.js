import http from "http";
http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html"});
    console.log(req);
    res.write("<h1> hello node js server </h1>");
    res.end();
}).listen(8081);
console.log("Sever invoked at link http://localhost:8081");

