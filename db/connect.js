const mongoose = require('mongoose');

uri = "mongodb+srv://restapi:Maurya.restapi9143@cluster0.ssqxekq.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;