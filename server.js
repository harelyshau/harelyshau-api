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


setInterval(pushNotification, 25000)
app.listen(3000)