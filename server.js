const express = require('express')
const app = express()
const cors = require('cors')
const appointmentRouter = require('./routes/appointments')
const notificationRouter = require('./routes/notifications')
const pushNotification = require('./utils/pushNotification')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use('/notifications', notificationRouter)
app.use('/appointments', appointmentRouter)


setTimeout(() => pushNotification(
    `Thanks for visiting harelyshau.dev!`,
    {
        body: 'Hope you will find it useful!',
        icon: 'https://harelyshau.dev/resource/image/favicon/favicon.svg'
    }
), 25000)
app.listen(3000)