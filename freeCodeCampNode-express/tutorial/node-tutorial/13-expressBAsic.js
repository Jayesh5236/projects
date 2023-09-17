import express from "express"


const app=express()     //Invoking


app.get('/',(req,res)=>{
    res.status(200).send("Home page")
    console.log("user had the request");
})
//local 5000 will have this msg 

app.get('/about',(req,res)=>{
    res.status(200).send("About PAge")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})          //For other Routes it will show this msg
app.listen(5000,()=>{
    console.log(`Server is listening on port 5000`);
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

