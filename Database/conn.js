const mongoose = require('mongoose');
const DB = process.env.DB;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection is Successful");
    }).catch((e) =>{
        console.log(e);
    })

    // const connect = async () =>{
    //     try{
    //         await mongoose.connect(DB,{
    //             useNewUrlParser:true,
    //             useUnifiedTopology:true
    //             })

    //     }catch(e){
    //         throw e;
    //     }
    // }