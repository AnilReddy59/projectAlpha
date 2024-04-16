const server = require('./express')()
const  port = 7000 


server.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`);
})

