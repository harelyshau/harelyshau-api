const express = require('express')
const router = express.Router()
const fs = require('fs') 
const pushNotification = require('../utils/pushNotification')

router.post('/subscribe', (req, res) => {
    fs.writeFileSync('subscription.json', JSON.stringify(req.body))
    res.status(200).send('OK')
})

router.post('/', (req, res) => {
    const { title, body, icon, vibration, delay } = req.body
    setTimeout(() => pushNotification(title, {
        body,
        icon,
        vibrate: vibration ? [300, 100, 400] : null
    }), delay * 1000)
    res.status(200).send('OK')
})

module.exports = router