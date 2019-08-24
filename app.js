const express = require('express')
const app = express()
const path =require('path')
const port = process.env.PORT || 200



// middleware for folder 1

app.use(express.static(__dirname))

// landing  page load!

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})







// start the server

app.listen(port, (err)=>{
    
    if(err) throw err

    console.log(`connected to the server on port ${port}`)
}
)