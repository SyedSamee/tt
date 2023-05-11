const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("hello wolrd");
})
console.log("im on");

app.listen(2000);