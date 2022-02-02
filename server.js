const express = require('express');
const expressSession = require('express-session');
const startGame = require('./controllers/startGame')
const leaderBoard = require('./controllers/leaderBoard')

const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));

let port = process.env.PORT ? process.env.PORT : 3010;

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/",(req, res) => {
    res.render('index')
})

app.get("/login",(req, res) => {
    res.render('login')
})

app.use(startGame);
app.use(leaderBoard);

const server = app.listen(port, ()=>{
    console.log(`Server listening at Port: ${port}`);
})
