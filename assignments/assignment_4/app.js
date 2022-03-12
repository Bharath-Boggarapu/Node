const express = require("express");
const mongoose = require('mongoose');
const User = require("./model/todo");
const bodyparser = require("body-parser");
var methodOverride = require('method-override')

const app = express();
mongoose.connect('mongodb://localhost:27017/assignment');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser())

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    // add the code to read the data from data base
    const users = await User.find();
    res.render("home.ejs", {users});
});

app.get("/form", (req,res)=>{
    res.render("form.ejs")
    
})
app.post("/users/add",async(req,res)=>{
    await User.create({
        name: req.body.name,
        email:req.body.email,
        isPromoted:req.body.isPromoted
    })
    res.redirect("/")
})
app.put("/users/:id",async(req,res)=>{
    await User.updateOne({_id: req.params.id},[{$set:{isPromoted:{ $not: `$isPromoted` }}}])
    res.redirect("/")
})
app.delete("/users/:id", async (req,res)=>{
    await User.deleteOne({_id:req.params.id})
    res.redirect("/")
})
app.listen(3000,()=>console.log("server has started"))