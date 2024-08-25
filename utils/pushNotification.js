require('dotenv').config()
const webpush = require('web-push')
const fs = require('fs')
const VAPID = {
    subject: 'mailto: <pavel@harelyshau.dev>',
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY
}

webpush.setVapidDetails(...Object.values(VAPID))

module.exports = async (title, options) => {
    try {
        const subscription = JSON.parse(fs.readFileSync('subscription.json'))
        const payload = JSON.stringify({ title, options })
        await webpush.sendNotification(subscription, payload)
    } catch {}
}