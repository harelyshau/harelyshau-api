require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const appointmentRouter = require('./routes/appointments')
const notificationRouter = require('./routes/notifications')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use('/notifications', notificationRouter)
app.use('/appointments', appointmentRouter)


app.listen(3000)