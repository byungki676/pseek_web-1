var express = require('express');
var router = express.Router();

// surrealism으로 이동
router.get('/', (req, res) => {
    res.render("./artwork/mSurrealism.ejs",{});
});

module.exports = router;