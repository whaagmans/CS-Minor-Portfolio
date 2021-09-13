const { Router } = require('express')
const router = Router();

router.use('/hello', (req, res) => {
    res.end('Hello World!!')
});

module.exports = router;