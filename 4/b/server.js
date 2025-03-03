const express = require('express')
const path = require('path');
const app = express()
const hbs = require('hbs');
const port = 3000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b,){
    return a == b;
});

app.get('/', (req, res) => {
    //res.send('Hello Asa Marsal Keren Banget!')
    res.render("index")
})

app.get('/auth-login', (req, res) => {
    res.render("auth-login")
})

app.get('/auth-register', (req, res) => {
    res.render("auth-register")
})

app.get('/blog-create', (req, res) => {
    res.render("blog-create")
})

app.get('/blog-edit', (req, res) => {
    res.render("blog-edit")
})

app.get('/blog', (req, res) => {
    res.render("blog-list")
})

app.listen(port, () => {
  console.log(`Web listening on port ${port}`)
})