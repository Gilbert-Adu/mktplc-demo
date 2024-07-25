const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


const projects = [
    {
        "id": "1",
        "title": "Looking for an Android developer for a mobile app",
        "description": "We are looking to hire an Android developer with skills in either Kotlin or React-Native. Familiarity with Android Studio is appreciated. And experience managing large code bases is welcome. Experience building robust security systems for apps is a plus. Project will be for at most 2 months.",
        "author": "Jeremy Hlozek",
        "image": "/images/android.jpg"
    },
    {
        "id": "2",
        "title": "Design a logo for my company",
        "description": "Our small bakery startup is looking for a freelance graphic designer to design a logo for us. We would be looking to receive different formats (i.e for wide screens like stadium boards to small screen like Apple Watch screens). It's a short-term gig but since we are a startup and would likely be looking to hire a graphic designer in the future, we will keep your contact details on hand if we are a fit.",
        "author": "Matt McCormick",
        "image": "/images/bakery.jpg"

    },
    {
        "id": "3",
        "title": "Looking for a freelance bookkeeper for our digital marketing agency",
        "description": "We are a small Brooklyn-based digital marketing agency looking for an experienced bookkeeper. It is pertinent that you are well versed in tax preparation as tax season is upon us. If interested, please submit a bid and we will be reaching out to all qualified candidates.",
        "author": "Rosa Montgomery",
        "image": "/images/agency.jpg"

    }
]
app.get("/", (req, res) => {
    res.render("home")
});
app.get("/client-home", (req, res) => {
    res.render("clientHome")
});
app.get("/signin", (req, res) => {
    res.render("registerForm")
});
app.get("/signup", (req, res) => {
    res.render("signup")
});

app.get("/view", (req, res) => {
    res.render("initialView", {projects: projects})
});
app.post("/signin", (req, res) => {
    //res.send(req.body.username)
    //res.render("initialView", {projects: projects})
    res.redirect("/view");

});
app.listen(3000, () => {
    console.log("up on 3000")
})