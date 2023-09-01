import mongoose from "mongoose";

const bookSchema = mongoose.Schema( // tablonun, veya koleksiyonun kolonlarını hazırladık
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type:String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)




export const Book = mongoose.model('Book', bookSchema) // kolonları, ilgili modele aktardık

