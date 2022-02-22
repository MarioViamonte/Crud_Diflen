const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient 


const uri = "mongodb+srv://playviamonte:playdev21@cluster0.9gxda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('Crud_Diflen')

  app.listen(3009, function(){
    console.log("esta aplicação está rodando na porta 3009")
  })  
})

app.use(bodyParser.urlencoded({ extended: true }))


app.set('view engine', 'ejs')

app.get('/', (req,res)=> {
    res.render('index.ejs')
})

app.post('/show', (req,res) => {
    db.collection('data').save(req.body, (err, result) =>{
        if (err) return console.log(rserr)

        console.log("salvo no BD")
        res.redirect('/')
    })
})

    