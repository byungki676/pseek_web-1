var express = require('express');
var router = express.Router();

// modern으로 이동
router.get('/', (req, res) => {
    res.render("mModern.ejs",{});
});

module.exports = router;