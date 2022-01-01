// --------> server express

const express = require ('express')
const app = express ()

app.get('/', function(req, res){
    res.send("Teste com rota express")
})
app.listen(8004)

console.log('Server up')