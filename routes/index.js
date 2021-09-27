var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({msg: 'OK'})
});

router.get('/jokenpo', function(req, res, next) {
  const { player1, player2 } = req.query
  if(player1===player2){
    res.status(200).json({result: 'empate'})
  }
  if(player1==='pedra' && player2==='papel') {
    res.status(200).json({result: 'papel'})
  }
  if(player1==='papel' && player2==='pedra') {
    res.status(200).json({result: 'papel'})
  }
});

module.exports = router;
