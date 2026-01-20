import express, { response } from "express"

const app = express() 

app.get('/' , (req,res) => {

    res.json({ messgage: "Hello !" })

})

app.listen(3000 , () => { 
    console.log("server started")
})