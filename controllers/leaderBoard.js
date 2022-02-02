const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router = express.Router();

router.get("/lb", (req, res) =>{

    axios.get('https://pahm31sz31.execute-api.us-east-1.amazonaws.com/items')
    .then(data => {
        console.log(data.data);
        res.render("lb", {data : data.data, user: req.session.user})
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
})

router.post('/leaderBoard', (req, res)=>{
    console.log(req.body.finalScore);
    let score = req.body.finalScore;
    let user = req.session.user;
    console.log("session",req.session.sessionId);
    axios.put('https://pahm31sz31.execute-api.us-east-1.amazonaws.com/items',{
        id: ID(),
        name: req.session.user,
        sessionId: req.session.sessionId,
        score: parseFloat(req.body.finalScore)
    })
    .then(response => {
        console.log("Score Uploaded");
        axios.get('https://pahm31sz31.execute-api.us-east-1.amazonaws.com/items')
        .then(data => {
            console.log(data);
            // res.render("lb", {data : data.data, user: req.session.user})
            res.render("lb", {name: user, user, score, data: data.data});
        })
        .catch(err => {
            console.log(err)
            res.redirect('/')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/');
    })
})

router.get('/test', (req, res) =>{
    axios.put('https://pahm31sz31.execute-api.us-east-1.amazonaws.com/items',{
        id: ID(),
        name: "Harry Potter",
        sessionId: "testsession",
        score: 165.45
    })
    .then(res => {
        res.send(res)
    })
    .catch(err => {
        res.send(err)
    })
});

let ID = function () {
    return Math.random().toString(36).substr(1, 12);
  };

module.exports = router;