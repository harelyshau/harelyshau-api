const express = require('express')
const router = express.Router()
const fs = require('fs') 

router
    .route('/')
    .post((req, res) => {
        fs.writeFileSync('subscription.json', JSON.stringify(req.body))
        res.status(200).send('OK')
    })

module.exports = router