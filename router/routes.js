
const express = require('express');
const app = express();
const router = express.Router();
const ejs = require('ejs');
app.set('view engine', 'ejs')



router.get('/', (req, res) => {
    res.status(200).render('../views/login.ejs');
    console.log(`Rendering login page...`)
})
router.get('/signup', (req, res) => {
    res.status(200).render('../views/signup.ejs');
    console.log(`Rendering Register page...`)
})
router.post('/users/signup', (req, res, next) => {
    res.send(JSON.stringify(req.body));
    console.log(req.body)
})
router.post('/users/login', (req, res, next) => {
    res.send(JSON.stringify(req.body));
    console.log(req.body)
})
// router.get('/new', (req, res) => {
//     res.status(200).send('New Guy!')
//     console.log(req.body)
// })

module.exports = router;