const http = require('http')
const users=require('./mokes/user')

http.createServer((req ,res)=>{
    if(req.url==='/mokes/users'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end(JSON.stringify(users))
    }
    res.end()
}).listen(8000)