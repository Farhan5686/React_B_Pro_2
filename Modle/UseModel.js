const serverInt = require('mongoose');


const Schemadata = serverInt.Schema({
    userName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
    },
    Password:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    }
})

module.exports = serverInt.model('userdata',Schemadata)