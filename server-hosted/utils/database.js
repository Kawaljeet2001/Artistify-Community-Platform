const mongoose  = require('mongoose');

//database connection
mongoose.connect(process.env.DATABASE_CONNECTION_URL , {
    useNewUrlParser : true,
    // useFindAndModify : false,
    useUnifiedTopology : true
});
mongoose.Promise = global.Promise;
module.exports = mongoose.connection;