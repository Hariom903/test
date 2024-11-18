import http from "http";
const server=http.createServer((request,response)=>{
    for(let i=1;i<=3;i++){
    response.write("<h1>Well come to node js server </h1>");
    }
    response.end();
});
server.listen(8080,(error)=>{
if(error)
    console.log(error);
else
console.log("Server invoked at link http://localhost:8081");
});
