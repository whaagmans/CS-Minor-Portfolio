const { Router } = require('express')
const router = Router();

const speakEasy = require('speakeasy')

router.use('/auth', (req, res) => {
    res.end('Hello World!!')
});

module.exports = router;