const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
    res.send('Hello World!');
    next();
})
app.listen(PORT, () => {
    console.log(`Server Is Listening on port ${PORT}`)
})