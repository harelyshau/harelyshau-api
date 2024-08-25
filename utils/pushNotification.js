require('dotenv').config()
const webpush = require('web-push')
const fs = require('fs')
const VAPID = {
    subject: 'mailto: <pavel@harelyshau.dev>',
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY
}

webpush.setVapidDetails(...Object.values(VAPID))

module.exports = async () => {
    try {
        const subscription = JSON.parse(fs.readFileSync('subscription.json'))
        await webpush.sendNotification(subscription, JSON.stringify({
            title: 'Any message here',
            options: {
                body: 'Lorem ipsum dolor',
                icon: 'https://harelyshau.dev/resource/image/favicon/favicon.svg'
            }
        }))
    } catch {}
}