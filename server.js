require('dotenv').config()
const express = require('express')
const app = express()
const appointemntRouter = require('./routes/appointments')
const notificationRouter = require('./routes/notifications')

app.use('/appointments', appointemntRouter)
app.use('/notifications', notificationRouter)

app.listen(3000)
console.log(process.env.TEST)