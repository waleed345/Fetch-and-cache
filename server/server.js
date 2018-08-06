const express = require('express');

const app = express();

app.get('/users',function(req,res){
    res.send({hello:'world'})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
