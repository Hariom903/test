import http from "http";
http.createServer((req,res)=>{
    res.write("<h1> hello node js server </h1>")
    res.end();
}).listen(8080);
console.log("Sever invoked at link http://localhost:8081");
