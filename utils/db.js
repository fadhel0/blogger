import mongoose from "mongoose"

let isConnected = false
export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    const db = await mongoose.connect( process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    isConnected = true
    console.log('MongoDB connected')
}