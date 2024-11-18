import http from "http";
http.createServer((req,res)=>{
   var msg;
   if(req.url=="/"||req.url=="/home")
    msg="<h1>Home page invoked</h1>";
   else if(req.url=="/contact")
    msg="<h1>/contact page ulr invoked </h1>";
   else if(req.url=="/login")
    msg="<h1>/login page ulr invoked </h1>";
   else if(req.url=="/register")
    msg="<h1>/register page ulr invoked </h1>";
   else if(req.url=="/about")
    msg="<h1>/about page ulr invoked </h1>";
   else
    msg="<h1> invailed url  </h1>";
res.write(msg);
res.end();
}).listen(8081);
console.log("Sever invoked at link http://localhost:8081");

