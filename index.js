const express = require('express');

const app = express();

const port = 4000;

// app.get('/',(req,res)=>{
//     return res.send("Hi i am Express Home Page")
// })

app.listen(port,(err)=>
{
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})