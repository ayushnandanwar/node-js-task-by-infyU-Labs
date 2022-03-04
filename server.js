const app = require('./app')
const dotenv = require('dotenv')
const mongoose  = require('mongoose');
dotenv.config({ path: './config.env' });
mongoose.connect(process.env.DATABASEURL).then(el=>{
    console.log("DATABASE connected");
}).catch(el=>{
    console.log("DB not connected");   
})

app.listen(process.env.PORT,()=>{
    console.log(`server on on ${process.env.PORT}`);
});