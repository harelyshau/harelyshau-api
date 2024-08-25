const express = require('express')
const app = express()
const appointemntRouter = require('./routes/appointments')

app.use('/appointments', appointemntRouter)

// app.get('/appointemnts', (req, res) => {
//     console.log('Here')
//     res.json([{}])
//     // res.send('hi')
// })

// app.post('/saveNotificationSub', (req, res) => {

// })

app.listen(3000)
console.log('hello')