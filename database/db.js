const mongoose = require('mongoose');
const server = 'mongodb://127.0.0.1:27017';
const database = 'chatUsers';
mongoose.set('strictQuery', true);

let dbCnt;
let connectToDB = (cbf) => {
    const connectDatabase = mongoose.connect(`${server}/${database}`)
    .then((db) => {
    dbCnt = db;
    return cbf();
    })
    .catch((err) => {
        console.log(err);
        return cbf(err);
    });
}
let getDb = () => dbCnt;

module.exports = { connectToDB, getDb };
// const connectDb = () => {
//   app.get('/db', (req, res) => {
//     let dbconn;
//     const cxn = mongoose.connect();
//     const connObj = mongoose.connection;
//     res.json({connObj});
//     console.log(`Db Loading`)
//   });
//     // cxn.then((db) => {
//     //     dbconn = db.db();
//     //     console.log(`${dbconn}`);
//     // })
//     // cxn.catch((err) => console.error(err));
// }
// connectDb();
// // const getDb = () => connectDb();

// // getDb();
// // module.exports = { connectDb, getDb };
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// })