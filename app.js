const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/routes');
const formOptions = {
    extended: true
}


app.use('/users',express.urlencoded(formOptions));
app.use(express.static('./public'));
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Is Listening on port ${PORT}`)
})