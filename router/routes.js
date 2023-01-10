
const express = require('express');
const app = express();
const router = express.Router();
const ejs = require('ejs');
// const express = require('express');
// const app = require('express')
app.set('view engine', 'ejs')



router.get('/', (req, res) => {
    res.status(200).render('../views/login.ejs');
    console.log(`Rendering login page...`)
})
// router.get('/new', (req, res) => {
//     res.status(200).send('New Guy!')
//     console.log(req.body)
// })

module.exports = router;