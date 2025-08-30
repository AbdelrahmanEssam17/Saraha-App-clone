import mongoose from 'mongoose'
export const connectDB=async()=>{
     await  mongoose.connect(process.env.DB_URI).then(res=>{
             console.log(`connect`)
        }).catch(err=>{
            console.error(`fail`,err);
        })
}
