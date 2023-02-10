
const express = require('express');
const app = express();
const router = express.Router();
const ejs = require('ejs');
const { mongoose, Schema} = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const TOKEN_KEY = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const SESSION_SECRET = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const cookieParser = require("cookie-parser");
const session = require('express-session');
const twoHours = 1000 * 60 * 60 * 2;

const sessionOptions = {
    secret: SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: twoHours},
    resave: false
}
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
});

app.use(session(sessionOptions));
app.use(cookieParser());
app.set('view engine', 'ejs')

router.get('/', (req, res) => {
    res.status(200).render('../views/login.ejs');
    console.log(`Rendering login page...`)
})
router.get('/signup', (req, res) => {
    res.status(200).render('../views/signup.ejs');
    console.log(`Rendering Register page...`)
})
router.post('/users/signup', async (req, res, next) => {
    let Usermodel = mongoose.model('userdatas', userSchema);
    try{
        let { rjina, rpepe, rsiri } = req.body;
        const oldUser = await Usermodel.findOne({email: rpepe})
        if (oldUser) {
            res.status(409).json({status: "error", message: "User already exists"})
        }else {
              //Encrypt Password
            let encryptedPass = await bcrypt.hash(rsiri, 10);
            //Create user 
            let createdUser = await Usermodel.create({
                name: rjina,
                email: rpepe.toLowerCase(),
                password: encryptedPass
            })
            let ins = createdUser.save();
            res.status(200).json({status: "success", msg: `${createdUser.name} has been Registered`});
        }
    }
    catch(err){
        console.error(err)
    }
    // res.send(JSON.stringify(req.body));
    // console.log(req.body)
})
router.post('/users/login', async (req, res, next) => {
    let Usermodel = mongoose.model('userdatas', userSchema);
    //Sessions
    //Get the data from the form
    const { lpepe, lname } = req.body;
    const matchedCase = await Usermodel.findOne({email: lpepe, name: lname});
    if(!matchedCase){
        res.status(409).json({status: "error", msg: "User not found"})
    }else{
        res.status(200).json({status: "success", msg: matchedCase});
    }

    

})

module.exports = router;