import mongoose from 'mongoose';
const { Schema } = mongoose;

const listSchema = new Schema({
    title: String,
    items: [String],
});

const model = mongoose.model('lists', listSchema);

export default model;