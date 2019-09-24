var express=require('express');
var request=require('request');
var bodyParser=require('body-parser');
var app=express();
var freinds=[
    {"name" : "User1","image":"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {"name" : "User2","image":"https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {"name" : "User3","image":"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"}
];

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render("landing");
});

app.get('/campgrounds',(req,res)=>{
    res.render('campgrounds',{data: freinds});
});

app.post('/campgrounds',(req,res)=>{
    let name=req.body.name;
    let image=req.body.image;
    let freind={
        "name" : name,
        "image" : image
    };
    freinds.push(freind);
    res.redirect('/campgrounds');

})

app.get('/campgrounds/new',(req,res)=>{
    res.render('new');
})

app.listen(3000,'localhost',()=>{
    console.log("Yelp Camp has started!!")
})