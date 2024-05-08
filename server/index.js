const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


app.get("/" , (req , res)=>{
    res.send("Hello world!");
})

app.use(express.json())
app.use(cors());
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })