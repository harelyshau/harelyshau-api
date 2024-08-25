require('dotenv').config()
const webpush = require('web-push')
const fs = require('fs')
const VAPID = {
    "subject": "mailto: <pavel@harelyshau.dev>",
    "publicKey": "BB_OayafrL0WJmdmEsikI5zSxplbn4KxShNwOK_3_1H6DG_lP0d4SC0-2gWqCFxV51wtL5fEXjAfQvn3tRxwIIk",
    "privateKey": process.env.VAPIDprivateKey
}

webpush.setVapidDetails(...Object.values(VAPID))

module.exports = () => {
    try {
        const subscription = JSON.parse(fs.readFileSync('subscription.json'))
        return webpush.sendNotification(subscription, JSON.stringify({
            title: 'Any message here',
            options: {
                body: 'Lorem ipsum dolor',
                icon: 'https://harelyshau.dev/resource/image/favicon/favicon.svg'
            }
        }))
    } catch {}
}