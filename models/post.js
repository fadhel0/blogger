import { Schema, model, models } from 'mongoose'

const Postschema = new Schema({
    title: {
        type: String,
        required: [true , 'Please add a title'],
    },
    subHeading: {
        type: String,
        required : [true , 'Please add a subHeading'],
    },
    tag: {
        type: String,
        required : [true , 'Please add a tag'],
    },
    img: {
        type: String,
        required: [true , 'Please add an image'],
    },
    content: {
        type: Array,
        required: [true , 'Please add content'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    Number: {
        type: Number,
        default: Math.floor(Math.random() * 1000),
    },
    author: {
        type: String,
        required: [true , 'Please add an author'],
    },
    authorImg: {
        type: String,
        required: [true , 'Please add an authorImg'],
    }
})

const Post = models.Post || model('Post', Postschema);
export default Post