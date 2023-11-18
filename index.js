const express=require("express")
const nodemailer=require("nodemailer")
const app=express()
app.use(express.json())

let config={
    service:"gmail",
    auth:{
        user:"animeshghoroi2000@gmail.com",
        pass:"App Password"
    }
}

let transporter=nodemailer.createTransport(config)


let message={
    from:"animeshghoroi2000@gmail.com",
    to:"yekipi5504@nexxterp.com",
    subject:"Demo send email",
    html:`<h1>Hello World!</h1>`
}
transporter.sendMail(message)
.then((res)=>{
    console.log("Successfully send the mail");
})
.catch((err)=>{
    console.log("Internal Error!");
})




app.listen(8080,()=>{
    console.log("Srever is runing at 8080");
})


