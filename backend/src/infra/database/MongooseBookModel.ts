import { Schema, model} from 'mongoose';

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author:{type: String, required: true},
    genre: {type: String}
});

export const BookModel = model('Book', bookSchema);