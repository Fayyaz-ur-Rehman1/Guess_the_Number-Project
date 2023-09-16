const express = require('express');
const app = express();
const path = require('path');
const port = 10009;
app.use(express.static(path.join(__dirname,'routes')))

app.get(('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'routes','index.html'))
}))
app.listen(port,()=>{
    console.log(`this is server start on port no:${port}`);
})