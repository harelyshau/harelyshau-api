const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        res.json([{}, {}])
    })
    .post((req, res) => {

    })

router
    .route('/:id')
    .get(({ params: { id } }, res) => {
        res.json({ id })
    })
    .delete((req, res) => {

    })
    .put((req, res) => {

    })

module.exports = router