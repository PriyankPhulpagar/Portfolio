import express from "express";

const app = express();
const Port =3000;

app.get("/", (req,res)=>{
    const today = new Date();
    const day=today.getDay;

    let t = "weekday";
    let y = "its time to work Hard!"

    if(day===0 || day===6){
        t = "weekend";
        y = "its time to have fun!"
    }
    

    res.render("index.ejs",
        {
            week:t,
            adv:y,
        }

    )
})


app.listen(Port,()=>{
    console.log(`Sever is running on Port No ${Port}`);
})