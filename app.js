const express = require('express');
const app = express();
const PORT = process.env.DEV_PORT || 5000;
const router = require('./router/routes');
const { connectToDB, getDb } = require('./database/db');
const formOptions = {
    extended: true
}

let cxnString;

app.use('/users',express.urlencoded(formOptions));
app.use(express.static('./public'));
app.use(router);

connectToDB((err) => {
    if(!err) {
        app.listen(PORT, () => {
            console.log(`Server Is Listening on port ${PORT}`)
        })
        cxnString = getDb();
    }else {
        console.error(err);
    }
})
