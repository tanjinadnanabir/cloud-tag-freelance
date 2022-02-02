const express = require('express');
const router = express.Router();

router.get("/player",(req, res) => {
    if(req.session.user && req.session.sessionId)
        res.render('player', { name: req.session.user})
    else
        res.redirect('/')
})

router.post('/player', (req, res)=>{
    if(req.body.name){
        req.session.user = req.body.name;
        req.session.sessionId = ID();
        res.render("player", { name: req.session.user });
    }
    else
        res.redirect('/')
})

var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

module.exports = router;